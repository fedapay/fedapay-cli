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
fedapay-cli/0.0.0 darwin-x64 node-v12.18.3
$ fedapay --help [COMMAND]
USAGE
  $ fedapay COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options)
* [`fedapay customers:create [FILE]`](#fedapay-customerscreate-file)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-1)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-2)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-3)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-4)
* [`fedapay help [COMMAND]`](#fedapay-help-command)

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

_See code: [src\commands\customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers.ts)_

## `fedapay customers:create [options]`

describe the command here

```
USAGE
  $ fedapay customers:create [options]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\customers\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\create.ts)_

## `fedapay customers delete [options]`

delete an customer

```
USAGE
  $ fedapay customers delete [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm                  confirm the delete
  --environment=environment  FedaPay Api environment
  --id=id                    (required) the id of the customer to update

EXAMPLES
  customers:delete --id=4856
  customers:delete --id=4856 --confirm
```

_See code: [src\commands\customers\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\delete.ts)_

## `fedapay customers list [options]`

List customers ressource

```
USAGE
  $ fedapay customers list [options]

OPTIONS
  -h, --help                 show CLI help
  -l, --limit=limit          [default: 25] Limit the list of customers to display
  --api-key=api-key          Your API key to use for the command
  --email=email              filter the list by the customers email
  --environment=environment  FedaPay Api environment
  --page=page                [default: 1] specify the page to show

EXAMPLES
  customers:list
  customers:list --limit=20
  customers:list --email=johndoe@entreprise.com
  customers:list --page=2
```

_See code: [src\commands\customers\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\list.ts)_

## `fedapay customers retrieve [options]`

get customer details

```
USAGE
  $ fedapay customers retrieve [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    (required) retrieve details of the customer with this id

EXAMPLES
  customers:retrieve --id=5
  customers:retrieve --id=1
```

_See code: [src\commands\customers\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\retrieve.ts)_

## `fedapay customers update [options]`

Udapde an customer informations

```
USAGE
  $ fedapay customers update [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm                  confirm the update
  --data=data                (required) The new data for the update
  --environment=environment  FedaPay Api environment
  --id=id                    (required) the id of the customer to update

EXAMPLES
  customers:update --id=2047 -d= email
  customers:update --id=2047 --data={"email":"johndo@gmail.com"} --confirm
```

_See code: [src\commands\customers\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\update.ts)_

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
<!-- commandsstop -->
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options)
* [`fedapay customers:delete [FILE]`](#fedapay-customersdelete-file)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-1)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-2)
* [`fedapay customers <operation> [options]`](#fedapay-customers-operation-options-3)
* [`fedapay help [COMMAND]`](#fedapay-help-command)

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

_See code: [src\commands\customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers.ts)_

## `fedapay customers:delete [options]`

describe the command here

```
USAGE
  $ fedapay customers:delete [options]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\customers\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\delete.ts)_

## `fedapay customers list [options]`

List customers ressource

```
USAGE
  $ fedapay customers list [options]

OPTIONS
  -h, --help                 show CLI help
  -l, --limit=limit          [default: 25] Limit the list of customers to display
  --api-key=api-key          Your API key to use for the command
  --email=email              filter the list by the customers email
  --environment=environment  FedaPay Api environment
  --page=page                [default: 1] specify the page to show

EXAMPLES
  customers:list
  customers:list --limit=20
  customers:list --email=johndoe@entreprise.com
  customers:list --page=2
```

_See code: [src\commands\customers\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\list.ts)_

## `fedapay customers retrieve [options]`

get customer details

```
USAGE
  $ fedapay customers retrieve [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    (required) retrieve details of the customer with this id

EXAMPLES
  customers:retrieve --id=5
  customers:retrieve --id=1
```

_See code: [src\commands\customers\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\retrieve.ts)_

## `fedapay customers <operation> [options]`

List customers ressource

```
USAGE
  $ fedapay customers <operation> [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm                  confirm the update
  --data=data                (required) The new data for the update
  --environment=environment  FedaPay Api environment
  --id=id                    (required) the id of the client to update

EXAMPLES
  customers:update --id=8963 --data="{"email": "johndoe@entreprise.com", first}"
  customers:list --email=
  customers:list --page=2
```

_See code: [src\commands\customers\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\update.ts)_

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
<!-- commandsstop -->
* [`fedapay customers [LIST]`](#fedapay-customers-list)
* [`fedapay customers:list [FILE]`](#fedapay-customerslist-file)
* [`fedapay hello [FILE]`](#fedapay-hello-file)
* [`fedapay help [COMMAND]`](#fedapay-help-command)

## `fedapay customers [LIST]`

describe the command here

```
USAGE
  $ fedapay customers [LIST]

ARGUMENTS
  LIST  List all customers

OPTIONS
  -h, --help         show CLI help
  --api-key=api-key  Your API key to use for the command
```

_See code: [src/commands/customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/customers.ts)_

## `fedapay customers:list [Options]`

describe the command here

```
USAGE
  $ fedapay customers:list [Options]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/customers/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/customers/list.ts)_

## `fedapay hello [Options]`

describe the command here

```
USAGE
  $ fedapay hello [Options]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ fedapay hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
