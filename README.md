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
* [`fedapay help [COMMAND]`](#fedapay-help-command)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-1)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-2)
* [`fedapay transactions:retrieve [FILE]`](#fedapay-transactionsretrieve-file)
* [`fedapay transactions <operation> [options]`](#fedapay-transactions-operation-options-3)

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
```

_See code: [src/commands/transactions.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions.ts)_

## `fedapay transactions <operation> [options]`

Create a Customer

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -f, --force

  -h, --help
      show CLI help

  --api-key=api-key
      Your API key to use for the command

  --data=data
      (required) [default: {
               description: 'Description',
               amount: 2000,
               callback_url: 'https://maplateforme.com/callback',
               currency: {
                   iso: 'XOF'
               },
               customer: {
                   firstname: 'John',
                   lastname: 'Doe',
                   email: 'john.doe@example.com',
                   phone_number: {
                       number: '97808080',
                       country: 'BJ'
                   }
               }] provide all the intel of your transactions

  --environment=environment
      FedaPay Api environment

  --with_token
      add the token to your transactions

EXAMPLES
  transactions:list
  transactions:create
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
  --limit=limit              [default: 2] define a limit per result
  --page=page                [default: 1] display the result by page number

EXAMPLES
  transactions:list
  transactions:create
```

_See code: [src/commands/transactions/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/list.ts)_

## `fedapay transactions:retrieve [FILE]`

describe the command here

```
USAGE
  $ fedapay transactions:retrieve [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/transactions/retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/retrieve.ts)_

## `fedapay transactions <operation> [options]`

Update some transactions

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -f, --force
  -h, --help                 show CLI help
  -n, --name=name            name to print
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment

EXAMPLES
  transactions:list
  transactions:create
```

_See code: [src/commands/transactions/update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/update.ts)_
<!-- commandsstop -->
