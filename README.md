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
fedapay-cli/0.0.0 linux-x64 node-v10.21.0
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
* [`fedapay payouts <operation> [options]`](#fedapay-payouts-operation-options)
* [`fedapay payouts:create [FILE]`](#fedapay-payoutscreate-file)
* [`fedapay payouts:delete [FILE]`](#fedapay-payoutsdelete-file)
* [`fedapay payouts:list`](#fedapay-payoutslist)
* [`fedapay payouts:schedule [FILE]`](#fedapay-payoutsschedule-file)
* [`fedapay payouts:send-now [FILE]`](#fedapay-payoutssend-now-file)
* [`fedapay payouts:update [FILE]`](#fedapay-payoutsupdate-file)

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

_See code: [src/commands/payouts.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts.ts)_

## `fedapay payouts:create [FILE]`

describe the command here

```
USAGE
  $ fedapay payouts:create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/payouts/create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/create.ts)_

## `fedapay payouts:delete [FILE]`

describe the command here

```
USAGE
  $ fedapay payouts:delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/payouts/delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/delete.ts)_

## `fedapay payouts:list`

List payouts ressource

```
USAGE
  $ fedapay payouts:list

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --customer=customer
  --environment=environment  FedaPay Api environment
  --limit=limit              [default: 10] Limit the list of payouts to display
  --page=page
  --status=status
```

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

_See code: [src/commands/payouts/send-now.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/send-now.ts)_

## `fedapay payouts:update [FILE]`

describe the command here

```
USAGE
  $ fedapay payouts:update [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/payouts/update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/payouts/update.ts)_
<!-- commandsstop -->
