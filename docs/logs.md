## `fedapay logs:<operation> [parameters...]`

Manage FedaPay logs

```
USAGE
  $ fedapay logs:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for logs command.
  --api-key=api-key                           Your API key to use for the command

EXAMPLES
  logs:list
  logs:retrieve --id=ID

COMMANDS
  logs:list      List of the logs records.
  logs:retrieve  Retrieve a log
```

## `fedapay logs:list [parameters...]`

List of the logs records.

```
USAGE
  $ fedapay logs:list [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filter=filter                         Filter the list of logs.
  -h, --help                                  Help for logs:list
  -l, --limit=limit                           [default: 10] Limit of records to display.
  --api-key=api-key                           Your API key to use for the command

EXAMPLES
  logs:list --api-key=[API-KEY] --environment=[ENVIRONMENT] -f method=POST
  logs:list --api-key=[API-KEY] --environment=[ENVIRONMENT] -f status=400 -f method=GET -f status=200
```

## `fedapay logs:retrieve [parameters...]`

Retrieve a log

```
USAGE
  $ fedapay logs:retrieve [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for logs:retrieve command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) ID of the log.

EXAMPLES
  logs:retrieve --api-key=[API_KEY] --environment=sandbox --id=ID
  logs:retrieve --api-key=[API_KEY] --environment=sandbox --id=ID
```
