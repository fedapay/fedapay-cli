## `fedapay samples:<operation> [parameters...]`

Samples integration built by FedaPay

```
USAGE
  $ fedapay samples:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for samples command.
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  samples:create  create a sample project integrating Fedapay
  samples:list    A list of available Fedapay Samples integrations that can be setup and bootstrap by the CLI.
```

## `fedapay samples:create [parameters...]`

create a sample project integrating Fedapay

```
USAGE
  $ fedapay samples:create [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  show CLI help
  --api-key=api-key                           Your API key to use for the command
  --name=name                                 [default: My project] The name of your project
  --type=type                                 (required) Type of project you want to create

EXAMPLE
  samples:create --api-key=[API-KEY] --environment=[env] --type=[TYPE] --name=[PROJECT_NAME]
```

## `fedapay samples:list [parameters...]`

A list of available Fedapay Samples integrations that can be setup and bootstrap by the CLI.

```
USAGE
  $ fedapay samples:list [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  List Fedapay Samples supported by the CLI
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  samples:list
```
