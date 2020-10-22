## `fedapay Webhooks:<operation> [parameters...]`

Manage FedaPay Webhook ressources

```
USAGE
  $ fedapay Webhooks:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for Webhooks command.
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  webhooks:create    Create a new webhook.
  webhooks:delete    Delete a webhook.
  webhooks:list      List of the webhook records.
  webhooks:listen    Listen a new webhook and forward event to a local url
  webhooks:retrieve  Retrieve a webhook.
  webhooks:update    Update a webhook.
```

## `fedapay webhooks:list [options]`

List of the webhook records.

```
USAGE
  $ fedapay webhooks:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -f, --filters=filters                       Filter the list of webhooks.
  -h, --help                                  Help for webhooks:list
  -l, --limit=limit                           [default: 10] Limit of records to display.
  -p, --page=page                             [default: 1] The page of the records to display.
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  webhooks:list --api-key=[api_key] --environment=environment --limit=15
```

## `fedapay webhooks:retrieve [options]`

Retrieve a webhook.

```
USAGE
  $ fedapay webhooks:retrieve [options]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for webhooks:retrieve command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) ID of the webhook.

EXAMPLE
  webhooks:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]
```

## `fedapay webhooks:create [options]`

Create a new webhook.

```
USAGE
  $ fedapay webhooks:create [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for webhooks:create.
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  webhooks:create --api-key=[API-KEY] --environment=[env] -d url=https://example.com/webhooks
```

## `fedapay webhooks:update [options]`

Update a webhook.

```
USAGE
  $ fedapay webhooks:update [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for webhooks:update command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The webhook ID.

EXAMPLE
  webhooks:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d url=https://example.com/webhooks
```

## `fedapay webhooks:delete [options]`

Delete a webhook.

```
USAGE
  $ fedapay webhooks:delete [options]

OPTIONS
  -c, --confirm                               Skip the warning prompt and automatically confirm the command being entered.
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for webhooks:delete.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The webhook ID.

EXAMPLES
  webhooks:delete --api-key=[api_key] --environment=[env] --id=[ID]
  webhooks:delete --api-key=[api_key] --environment=[env] --id=[ID] -c
```

## `fedapay webhooks:listen [options]`

Listen a new webhook and forward event to a local url

```
USAGE
  $ fedapay webhooks:listen [options]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for webhooks:create.
  -u, --url=url                               (required) Forward url
  --api-key=api-key                           Your API key to use for the command
  --log                                       Log request output

EXAMPLE
  webhooks:listen --api-key=[API-KEY] --environment=[env] --url=http://localhost:8080/webhooks
```
