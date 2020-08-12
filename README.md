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
# Usage
<!-- usage -->
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

_See code: [src/commands/customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/customers.ts)_

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
