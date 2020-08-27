fedapay-cli
===========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fedapay-cli.svg)](https://npmjs.org/package/fedapay-cli)
[![Downloads/week](https://img.shields.io/npm/dw/fedapay-cli.svg)](https://npmjs.org/package/fedapay-cli)
[![License](https://img.shields.io/npm/l/fedapay-cli.svg)](https://github.com/brexis/fedapay-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fedapay-cli
$ fedapay COMMAND
running command...
$ fedapay (-v|--version|version)
fedapay-cli/0.0.0 win32-x64 node-v12.18.0
$ fedapay --help [COMMAND]
USAGE
  $ fedapay COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g fedapay-cli
$ fedapay COMMAND
running command...
$ fedapay (-v|--version|version)
fedapay-cli/0.0.0 linux-x64 node-v10.19.0
$ fedapay --help [COMMAND]
USAGE
  $ fedapay COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fedapay customers:<operation> [parameters...]`](#fedapay-customersoperation-parameters)
* [`fedapay $ fedapay customers:create [options]`](#fedapay--fedapay-customerscreate-options)
* [`fedapay customers:<operation> [parameters...]`](#fedapay-customersoperation-parameters-1)
* [`fedapay customers:<operation> [parameters...]`](#fedapay-customersoperation-parameters-2)
* [`fedapay customers:<operation> [parameters...]`](#fedapay-customersoperation-parameters-3)
* [`fedapay customers:<operation> [parameters...]`](#fedapay-customersoperation-parameters-4)
* [`fedapay events [FILE]`](#fedapay-events-file)
* [`fedapay help [COMMAND]`](#fedapay-help-command)
* [`fedapay login`](#fedapay-login)
* [`fedapay logs <operation> [options]`](#fedapay-logs-operation-options)
* [`fedapay logs <operation> [options]`](#fedapay-logs-operation-options-1)
* [`fedapay logs:retrieve [FILE]`](#fedapay-logsretrieve-file)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-1)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-2)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-3)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-4)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-5)
* [`fedapay payouts:<operation> [parameters...]`](#fedapay-payoutsoperation-parameters-6)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-1)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-2)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-3)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-4)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-5)
* [`fedapay transactions:<operation> [parameters...]`](#fedapay-transactionsoperation-parameters-6)

## `fedapay customers:<operation> [parameters...]`

Manage FedaPay customer ressources

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for customers command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
```

_See code: [src\commands\customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers.ts)_

## `fedapay $ fedapay customers:create [options]`

Create a new customer.

```
USAGE
  $ fedapay $ fedapay customers:create [options]

OPTIONS
  -d, --data=data            (required) Data for the API request.
  -h, --help                 Help for customers:create.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLE
  customers:create --api-key=[API-KEY] --environment=[env] -d firstname=John -d lastname=Doe -d 
  email=customertest1@tom.com -d phone_number[number]=68452896 -d phone_number[country]=BJ
```

_See code: [src\commands\customers\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\create.ts)_

## `fedapay customers:<operation> [parameters...]`

Delete a customer.

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -c, --confirm              Skip the warning prompt and automatically confirm the command being entered.
  -h, --help                 Help for customers:delete.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The customer ID.

EXAMPLES
  customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID]
  customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c
```

_See code: [src\commands\customers\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\delete.ts)_

## `fedapay customers:<operation> [parameters...]`

List of the customer records.

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -f, --filters=filters      Filter the list of customers.
  -h, --help                 Help for customers:list
  -l, --limit=limit          [default: 10] Limit of records to display.
  -p, --page=page            [default: 1] The page of the records to display.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLES
  customers:list
  customers:list --api-key=[API-KEY] --environment=[env] --limit=20
  customers:list --api-key=[API-KEY] --environment=[env] -p=2
```

_See code: [src\commands\customers\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\list.ts)_

## `fedapay customers:<operation> [parameters...]`

Retrieve a customer.

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for customers:retrieve command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) ID of the customer.

EXAMPLE
  customers:retrieve --api-key=[API-KEY] --environment=[env] --id=5
```

_See code: [src\commands\customers\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\retrieve.ts)_

## `fedapay customers:<operation> [parameters...]`

Update a customer.

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -d, --data=data            (required) Data for the API request.
  -h, --help                 Help for customers:update command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The customer ID.

EXAMPLES
  customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com
  customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com -d lastname=Doe
```

_See code: [src\commands\customers\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\update.ts)_

## `fedapay events [FILE]`

describe the command here

```
USAGE
  $ fedapay events [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\events.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\events.ts)_

## `fedapay help [COMMAND]`

display help for fedapay

```
USAGE
  $ fedapay help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_

## `fedapay login`

Login to Fedapay account

```
USAGE
  $ fedapay login

OPTIONS
  -h, --help                 Help for the login command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
```

_See code: [src\commands\login.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\login.ts)_

## `fedapay logs <operation> [options]`

Manage FedaPay logs

```
USAGE
  $ fedapay logs <operation> [options]

OPTIONS
  -h, --help                 Help for logs command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLES
  logs:list
  logs:retrieve --id=ID
```

_See code: [src\commands\logs.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\logs.ts)_

## `fedapay logs <operation> [options]`

List logs ressource

```
USAGE
  $ fedapay logs <operation> [options]

OPTIONS
  -f, --filter=filter        filter the list
  -h, --help                 show CLI help
  -l, --limit=limit          [default: 10] Limit the list of logs to display
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLES
  logs:list
  logs:list --limit=5
  logs:list --date=date
  logs:list --method=GET
  logs:list --status=200
  logs:list --path=0
```

_See code: [src\commands\logs\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\logs\list.ts)_

## `fedapay logs:retrieve [FILE]`

describe the command here

```
USAGE
  $ fedapay logs:retrieve [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\logs\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\logs\retrieve.ts)_

## `fedapay payouts:<operation> [parameters...]`

Manage FedaPay payout ressources

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for payouts command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
```

_See code: [src\commands\payouts.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts.ts)_

## `fedapay payouts:<operation> [parameters...]`

Create a new payout.

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -d, --data=data            Data for the API request.
  -h, --help                 Help for payouts:create.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --schedule=schedule        The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss GMT
  --send-now                 Send automatically the payout.

EXAMPLES
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d 
  customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com 
  customer[phone_number][number]=65423158 customer[phone_number][country]=bj
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d 
  customer[id]=[ID]
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d 
  customer[id]=[ID] --schedule="2020-8-12 11:41:51"
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d 
  customer[id]=[ID] --send-now
```

_See code: [src\commands\payouts\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\create.ts)_

## `fedapay payouts:<operation> [parameters...]`

Delete payout ressource

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -c, --confirm              Skip the warning prompt and automatically confirm the command being entered.
  -h, --help                 Help for payouts:delete.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The payout ID.

EXAMPLES
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID]
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c
```

_See code: [src\commands\payouts\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\delete.ts)_

## `fedapay payouts:<operation> [parameters...]`

List of the payout records.

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -f, --filters=filters      Filter the list of payouts.
  -h, --help                 Help for payouts:list
  -l, --limit=limit          [default: 10] Limit of records to display.
  -p, --page=page            [default: 1] The page of the records to display.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLES
  payouts:list --api-key=[API-KEY] --environment=[env] --limit=20
  payouts:list --api-key=[API-KEY] --environment=[env] --page=2
```

_See code: [src\commands\payouts\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\list.ts)_

## `fedapay payouts:<operation> [parameters...]`

Schedule a payout to be sent later.

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for payouts:schedule
  -w, --when=when            (required) The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss GMT
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The id of the payout to schedule

EXAMPLE
  payouts:schedule --api-key=[API-KEY] --environment=[env] --id=[ID] --when="2020-8-12 11:41:51"
```

_See code: [src\commands\payouts\schedule.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\schedule.ts)_

## `fedapay payouts:<operation> [parameters...]`

Send payouts.

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for payouts:send-now.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The payouts id.

EXAMPLES
  payouts:send-now --id=105
  payouts:send-now --id=105 --id=108"
```

_See code: [src\commands\payouts\send-now.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\send-now.ts)_

## `fedapay payouts:<operation> [parameters...]`

Update a payout.

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -d, --data=data            (required) Data for the API request.
  -h, --help                 Help for payouts:update command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The pauyout ID.

EXAMPLES
  payouts:update --api-key=[API-KEY] --environment=[env] --id=90 -d amount=550 -d currency[iso]=XOF -d mode=moov -d 
  customer[firstname]=Yu customer[lastname]=Ma customer[email]=vul@exemple.com customer[phone_number][number]=65423158 
  customer[phone_number][country]=bj
  payouts:update --api-key=[API-KEY] --environment=[env] --id=109 -d customer[id]=2055
```

_See code: [src\commands\payouts\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\update.ts)_

## `fedapay transactions:<operation> [parameters...]`

Manage FedaPay transaction ressources

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for transactions command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
```

_See code: [src\commands\transactions.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions.ts)_

## `fedapay transactions:<operation> [parameters...]`

Create a new transaction.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -d, --data=data            (required) Data for the API request.
  -h, --help                 Help for transactions:create.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --with-token               add the token to your transactions.

EXAMPLES
  transactions:create --api-key=[API-KEY] --environment=[env] -d amount=2500 -d description="Sending money to mum" -d 
  currency[iso]=XOF -d customer[email]=john.doe@example.com
  transactions:create --api-key=[API-KEY] --environment=[env] --with-token -d amount=2500 -d description="Sending money 
  to mum" -d currency[iso]=XOF -d customer[email]=john.doe@example.com
```

_See code: [src\commands\transactions\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\create.ts)_

## `fedapay transactions:<operation> [parameters...]`

Delete a transaction.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -c, --confirm              Skip the warning prompt and automatically confirm the command being entered.
  -h, --help                 Help for transactions:delete.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The transaction ID.

EXAMPLES
  transactions:delete --api-key=[api_key] --environment=[env] --id=[ID]
  transactions:delete --api-key=[api_key] --environment=[env] --id=[ID] -c
```

_See code: [src\commands\transactions\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\delete.ts)_

## `fedapay transactions:<operation> [parameters...]`

List of the transaction records.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -f, --filters=filters      Filter the list of transactions.
  -h, --help                 Help for transactions:list
  -l, --limit=limit          [default: 10] Limit of records to display.
  -p, --page=page            [default: 1] The page of the records to display.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment

EXAMPLE
  transactions:list --api-key=[api_key] --environment=environment --limit=15
```

_See code: [src\commands\transactions\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\list.ts)_

## `fedapay transactions:<operation> [parameters...]`

Retrieve a transaction.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for transactions:retrieve command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) ID of the transaction.

EXAMPLE
  transactions:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]
```

_See code: [src\commands\transactions\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\retrieve.ts)_

## `fedapay transactions:<operation> [parameters...]`

Generate a payment token for a transaction.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -h, --help                 Help for transactions:token command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The transaction ID

EXAMPLE
  transactions:token --api-key=[API-KEY] --environment=[env] --id=[ID]
```

_See code: [src\commands\transactions\token.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\token.ts)_

## `fedapay transactions:<operation> [parameters...]`

Update a transaction.

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -d, --data=data            (required) Data for the API request.
  -h, --help                 Help for transactions:update command.
  --api-key=api-key          Your API key to use for the command
  --environment=environment  [default: sandbox] FedaPay Api environment
  --id=id                    (required) The transaction ID.

EXAMPLES
  transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=2500
  transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=1780 -d 
  customer[email]=geronimo@apache.com
```

_See code: [src\commands\transactions\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\transactions\update.ts)_
<!-- commandsstop -->
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-1)
* [`fedapay events [FILE]`](#fedapay-events-file)
* [`fedapay events:list [FILE]`](#fedapay-eventslist-file)
* [`fedapay events:retrieve [FILE]`](#fedapay-eventsretrieve-file)
* [`fedapay events:tail [FILE]`](#fedapay-eventstail-file)
* [`fedapay help [COMMAND]`](#fedapay-help-command)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-1)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-2)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-3)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-4)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-5)

## `fedapay customers <operation> [options]`

Manage FedaPay customers ressource

```
USAGE
  $ fedapay customers <operation> [options]

OPTIONS
  -h, --help                 Help for customers command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment

EXAMPLES
  customers list
  customers create --email=foo@bar.com
  customers retrieve --id=ID
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `fedapay payouts <operation> [options]`

Manage FedaPay payouts ressource

```
USAGE
  $ fedapay payouts <operation> [options]

OPTIONS
  -h, --help                 Help for payouts command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment

EXAMPLES
  payouts list
  payouts create --data  --customer --schedule="date" --send-now
  payouts update --id  --data  --customer --confirm
  payouts delete  --id --confirm
  payouts schedule --id --when
  payouts send-now
```

## `fedapay customers <operation> [options]`

List customers ressource

```
USAGE
  $ fedapay customers <operation> [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --limit=limit              [default: 10] Limit the list of customers to display

EXAMPLES
  customers:list
  customers:list --limit=20
```

_See code: [src/commands/customers/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/customers/list.ts)_

## `fedapay events [FILE]`

describe the command here

```
USAGE
  $ fedapay events [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/events.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/events.ts)_

## `fedapay events:list [FILE]`

describe the command here

```
USAGE
  $ fedapay events:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/events/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/events/list.ts)_

## `fedapay events:retrieve [FILE]`

describe the command here

```
USAGE
  $ fedapay events:retrieve [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/events/retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/events/retrieve.ts)_

## `fedapay events:tail [FILE]`

describe the command here

```
USAGE
  $ fedapay events:tail [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/events/tail.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/events/tail.ts)_

_See code: [src/commands/payouts/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/list.ts)_

## `fedapay payouts:schedule [FILE]`

describe the command here

```
USAGE
  $ fedapay payouts:schedule [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/payouts/schedule.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/schedule.ts)_

## `fedapay payouts:send-now [FILE]`

describe the command here

```
USAGE
  $ fedapay payouts:send-now [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `fedapay transactions <operation> [options]`

Here you can manage your transaction

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -h, --help                 Help for transactions command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment

EXAMPLES
  transactions:list
  transactions:create
  transactions:update
  transactions:token
  transactions:delete
  transactions:retrieve
  transactions:delete --transaction_id=2520 --api-key=apiKey --environment=environment
```

_See code: [src/commands/transactions.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions.ts)_

## `fedapay transactions <operation> [options]`

Create a Transaction

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -d, --data=data            (required) provide all the intel of your transactions
  -f, --force
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --with_token               add the token to your transactions

EXAMPLES
  transactions:create --api-key=[api_key] --environment=environment -d amount=2500, -d description=Sending money to mum
  -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com
  transactions:create --api-key=[api_key] --environment=environment --with_token -d amount=2500, -d description=Sending
  money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com
```

_See code: [src/commands/transactions/create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/create.ts)_

## `fedapay transactions <operation> [options]`

List of the transactions ressources

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --limit=limit              [default: 25] define a limit per result
  --page=page                display the result by page number

EXAMPLE
  transactions:list --api-key=[api_key] --environment=environment --limit=15
```

_See code: [src/commands/transactions/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/list.ts)_

## `fedapay transactions <operation> [options]`

retrieve the id of a transaction

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    (required) Provide the id of the transaction you want to retrieve

EXAMPLE
  transactions:retrieve --api-key=[api_key] --environment=environment --id=12321
```

_See code: [src/commands/transactions/retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/retrieve.ts)_

## `fedapay transactions <operation> [options]`

Add a token to a transaction

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    (required) Provide the id of the transaction you want to tokenize

EXAMPLE
  transactions:token --api-key=[api_key] --environment=environment --id=12321
```

_See code: [src/commands/transactions/token.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/token.ts)_

## `fedapay transactions <operation> [options]`

Update some transactions

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -d, --data=data            (required) Provide the data you want to update
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm                  Update your data
  --environment=environment  FedaPay Api environment
  --id=id                    (required) Provide the id of the transaction you want to update

EXAMPLES
  transactions:update --api-key=[api_key] --environment=environment --id=12321 -d amount=2500, -d description=Sending
  money to mum -d currency[iso]=XOF
  transactions:update --api-key=[api_key] --environment=environment --id=52123 -d amount=1780, -d
  customer[email]=geronimo@apache.com --confirm
```

_See code: [src/commands/transactions/update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/update.ts)_
<!-- commandsstop -->
