fedapay-cli
===========

[![Version](https://img.shields.io/npm/v/fedapay-cli.svg)](https://npmjs.org/package/fedapay-cli)
[![Downloads/week](https://img.shields.io/npm/dw/fedapay-cli.svg)](https://npmjs.org/package/fedapay-cli)
[![License](https://img.shields.io/npm/l/fedapay-cli.svg)](https://github.com/fedapay/fedapay-cli/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Update](#update)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Install
```
$ npm install -g fedapay-cli
```

# Update
```
$ fedapay update
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g fedapay-cli
$ fedapay COMMAND
running command...
$ fedapay (-v|--version|version)
fedapay-cli/0.1.2 linux-x64 node-v14.3.0
$ fedapay --help [COMMAND]
USAGE
  $ fedapay COMMAND
...
```
<!-- usagestop -->
```
 command-line tool for FedaPay

VERSION
  fedapay-cli/0.1.0 linux-x64 node-v14.3.0

USAGE
  $ fedapay [COMMAND]

TOPICS
  customers     Manage FedaPay customer ressources
  events        Here you can manage events
  logs          Manage FedaPay logs
  payouts       Manage FedaPay payout ressources
  samples       Samples integration built by FedaPay
  transactions  Manage FedaPay transaction ressources

COMMANDS
  customers     Manage FedaPay customer ressources
  events        Here you can manage events
  help          display help for fedapay
  login         Connect to Fedapay account
  logout        Logout of Fedapay account
  logs          Manage FedaPay logs
  payouts       Manage FedaPay payout ressources
  profile       Display current login information
  samples       Samples integration built by FedaPay
  transactions  Manage FedaPay transaction ressources
```

# Get started

### Login

To start, you need to connect your FedaPay account.

```
$ fedapay login
```

The output will look like this:

![Select your environment](./docs/images/sandbox.png)

One you select your environment, you will be redirecting to the cli server page to login and select your account.

![Authenticate](./docs/images/output-login-sandbox.png)
![Select your account](./docs/images/select-account.png)

Now you are set.

![Succes message](./docs/images/succes.png)

### Create a new transaction

```
$ fedapay transactions:create -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d customer[email]=customer@email.com
```

The output will look like this:

```json
{
  "klass": "v1/transaction",
  "id": 16851,
  "reference": "trx__hQ_1603111067446",
  "amount": 2500,
  "description": "Sending money to mum",
  "callback_url": null,
  "status": "pending",
  "customer_id": 2568,
  "currency_id": 1,
  "mode": null,
  "operation": "payment",
  "metadata": {},
  "commission": null,
  "fees": null,
  "fixed_commission": 0,
  "amount_transferred": null,
  "created_at": "2020-10-19T12:37:47.446Z",
  "updated_at": "2020-10-19T12:37:47.446Z",
  "approved_at": null,
  "canceled_at": null,
  "declined_at": null,
  "refunded_at": null,
  "transferred_at": null,
  "deleted_at": null,
  "last_error_code": null,
  "custom_metadata": null,
  "amount_debited": null
}
```

### Retrieve a transaction

```
$ fedapay transactions:retrieve --id=16851
```

The output will look like this:

```json
{
  "klass": "v1/transaction",
  "id": 16851,
  "reference": "trx__hQ_1603111067446",
  "amount": 2500,
  "description": "Sending money to mum",
  "callback_url": null,
  "status": "pending",
  "customer_id": 2568,
  "currency_id": 1,
  "mode": null,
  "operation": "payment",
  "metadata": {},
  "commission": null,
  "fees": null,
  "fixed_commission": 0,
  "amount_transferred": null,
  "created_at": "2020-10-19T12:37:47.446Z",
  "updated_at": "2020-10-19T12:37:47.446Z",
  "approved_at": null,
  "canceled_at": null,
  "declined_at": null,
  "refunded_at": null,
  "transferred_at": null,
  "deleted_at": null,
  "last_error_code": null,
  "custom_metadata": null,
  "amount_debited": null
}
```

### Generate a token and a payment URL
```
$ fedapay transactions:token --id=16851
```

The output will look like this:

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE2ODUxLCJleHAiOjE2MDMxOTc3ODh9.961u7Gf5lr2LouyEGCnRN_uPP7Y4DUuRKL50M_WwVV4",
  "url": "https://fpay.li/uxAga"
}
```

### Retrive the last events

```
$ fedapay events:list
```

The output will look like this:

```json
{
  "events": [
    {
      "klass": "v1/event",
      "id": "AXVA3Z99XcBqjxRq9dZr",
      "type": "transaction.created",
      "entity": "{\"id\":16851,\"transaction_key\":null,\"reference\":\"trx__hQ_1603111067446\",\"description\":\"Sending money to mum\",\"callback_url\":null,\"amount\":2500,\"items\":1,\"status\":\"pending\",\"currency_id\":1,\"customer_id\":2568,\"deleted_at\":null,\"created_at\":\"2020-10-19T12:37:47.446Z\",\"updated_at\":\"2020-10-19T12:37:47.446Z\",\"mode\":null,\"approved_at\":null,\"metadata\":{},\"canceled_at\":null,\"declined_at\":null,\"refunded_at\":null,\"transferred_at\":null,\"commission\":null,\"fees\":null,\"amount_transferred\":null,\"operation\":\"payment\",\"fixed_commission\":0,\"last_error_code\":null,\"last_error_message\":null,\"custom_metadata\":null,\"page_id\":null,\"amount_debited\":null,\"approved_partially_refunded_at\":null,\"transferred_partially_refunded_at\":null,\"lock_transfer\":false,\"receipt_url\":null}",
      "object_id": 16851,
      "account_id": 1370,
      "created_at": "2020-10-19T12:37:47.480Z",
      "updated_at": "2020-10-19T12:37:47.481Z",
      "object": "transaction"
    },
    {
      "klass": "v1/event",
      "id": "AXVA1-NXXcBqjxRq9dXC",
      "type": "customer.created",
      "entity": "{\"id\":2568,\"firstname\":\"Jane\",\"lastname\":\"Doe\",\"email\":\"customer@email.com\",\"account_id\":1370,\"deleted_at\":null,\"created_at\":\"2020-10-19T12:31:31.628Z\",\"updated_at\":\"2020-10-19T12:31:31.628Z\",\"phone_number_id\":11272}",
      "object_id": 2568,
      "account_id": 1370,
      "created_at": "2020-10-19T12:31:31.634Z",
      "updated_at": "2020-10-19T12:31:31.634Z",
      "object": "customer"
    }
  ]
}
```

### Listen to FedaPay events

```
$ fedapay events --tail
```

![Events tail output](./docs/images/events-tail.png)


### Listen to FedaPay logs

```
$ fedapay logs --tail
```

![Logs tail output](./docs/images/logs-tail.png)

# Available commands
* [`fedapay login [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/login.md)
* [`fedapay logout`](https://github.com/fedapay/fedapay-cli/blob/master/docs/logout.md)
* [`fedapay profile`](https://github.com/fedapay/fedapay-cli/blob/master/docs/profile.md)
* [`fedapay customers:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/customers.md)
* [`fedapay transactions:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/transactions.md)
* [`fedapay payouts:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/payouts.md)
* [`fedapay events:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/events.md)
* [`fedapay logs:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/logs.md)
* [`fedapay samples:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/samples.md)
