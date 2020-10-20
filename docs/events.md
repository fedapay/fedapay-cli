## `fedapay events:<operation> [parameters...]`

Here you can manage events

```
USAGE
  $ fedapay events:<operation> [parameters...]

OPTIONS
  -d, --dump                                  Dump event details
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -f, --filters=filters                       Filter the list of event to tail.
  -h, --help                                  Help for events command
  -t, --tail                                  Tail events
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  events:list      List of the events
  events:retrieve  Retrieve an event thanks to its ID
```

## `fedapay events:list [parameters...]`

List of the events

```
USAGE
  $ fedapay events:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filters=filters                       Filters you want to apply
  -h, --help                                  Help for events:list command
  -t, --tail                                  Tail events
  --api-key=api-key                           Your API key to use for the command
  --limit=limit                               [default: 10] Limit of the records to display

EXAMPLES
  events:list --api-key=[api_key] --environment=environment --limit=15
  events:list --api-key=[api_key] --environment=environment --limit=15 -f type=transaction_deleted -f object_id=ID
```

## `fedapay events:retrieve [parameters...]`

Retrieve an event thanks to its ID

```
USAGE
  $ fedapay events:retrieve [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filters=filters                       Filter the list of event to tail.
  -h, --help                                  Help for events:retrieve command
  -t, --tail                                  Tail events
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     The Id of the event to retrieve

EXAMPLE
  events:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]
```
