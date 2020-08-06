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
fedapay-cli/0.0.0 darwin-x64 node-v12.18.3
$ fedapay --help [COMMAND]
USAGE
  $ fedapay COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
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

## `fedapay customers:list [FILE]`

describe the command here

```
USAGE
  $ fedapay customers:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/customers/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/customers/list.ts)_

## `fedapay hello [FILE]`

describe the command here

```
USAGE
  $ fedapay hello [FILE]

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
