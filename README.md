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

# Get started
```
$ fedapay transactions:create -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d customer[email]=customer@email.com 
Output
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
$ fedapay transactions:retrieve --id=16851
Output
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

# Commands
* [`fedapay login [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/login.md)
* [`fedapay logout`](https://github.com/fedapay/fedapay-cli/blob/master/docs/logout.md)
* [`fedapay profile`](https://github.com/fedapay/fedapay-cli/blob/master/docs/profile.md)
* [`fedapay customers:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/customers.md)
* [`fedapay transactions:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/transactions.md)
* [`fedapay payouts:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/payouts.md)
* [`fedapay events:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/events.md)
* [`fedapay logs:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/logs.md)
* [`fedapay samples:<operation> [parameters...]`](https://github.com/fedapay/fedapay-cli/blob/master/docs/samples.md)
