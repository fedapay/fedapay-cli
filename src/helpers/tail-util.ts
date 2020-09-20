var amqp = require('amqplib/callback_api');
import chalk from 'chalk';

/**
 * Class TailUtil
 */
export default class TailUtil {
    constructor(private url: string, private options: any) { }

    connect(filters = {}, cb: (x: string) => void) {
        amqp.connect(this.url, (error0: any, connection: any) => {
            if (error0) {
                throw error0;
            }

            connection.createChannel((error1: any, channel: any) => {
                if (error1) {
                    throw error1;
                }

                channel.assertQueue(this.options.queue, {
                    nowait: this.options.nowait,
                    durable: this.options.durable,
                    autoDelete: this.options.auto_delete,
                    arguments: {
                        'x-message-ttl': this.options.arguments['x-message-ttl'],
                        'x-expires': this.options.arguments['x-expires'],
                        'x-single-active-consumer': this.options.arguments['x-single-active-consumer']
                    }
                }, (error2: any) => {
                    if (error2) {
                        throw error2;
                    }

                    channel.consume(this.options.queue, (msg: any) => {
                        if (msg.content) {
                            const output = this.filterOutput(msg.content.toString(), filters);

                            if (output) {
                                cb(output);
                            }
                        }
                    }, {
                        noAck: true
                    });
                });
            });
        });
    }

    /**
     * Filter json output
     * @param {string} json
     * @param {any} filters
     * @return {string|null}
     */
    filterOutput(json: string, filters: any): string|null {
        try {
            const data = JSON.parse(json);
            for (const filter in filters) {
                if (!data[filter] || data[filter] !== filters[filter]) {
                    return null;
                }
            }

            return this.formatJsonOutput(data);
        } catch (e) {
            return null;
        }
    }

    /**
     * Format queue messange json
     * @param {string} json
     * @return {string}
     */
    formatJsonOutput(json: any): string {
        let log = '-- : ';

        for (const key in json) {
            log += chalk.bold.blue(`${key}: `) + `${json[key]} `;
        }

        return log;
    }
}
