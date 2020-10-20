## `fedapay transactions:<operation> [parameters...]`

Manage FedaPay transaction ressources

```
USAGE
  $ fedapay transactions:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for transactions command.
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  transactions:create    Create a new transaction.
  transactions:delete    Delete a transaction.
  transactions:list      List of the transaction records.
  transactions:retrieve  Retrieve a transaction.
  transactions:token     Generate a payment token for a transaction.
  transactions:update    Update a transaction.
```

## `fedapay transactions:list [options]`

List of the transaction records.

```
USAGE
  $ fedapay transactions:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filters=filters                       Filter the list of transactions.
  -h, --help                                  Help for transactions:list
  -l, --limit=limit                           [default: 10] Limit of records to display.
  -p, --page=page                             [default: 1] The page of the records to display.
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  transactions:list --api-key=[api_key] --environment=environment --limit=15
```

## `fedapay transactions:create [options]`

Create a new transaction.

```
USAGE
  $ fedapay transactions:create [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for transactions:create.
  --api-key=api-key                           Your API key to use for the command
  --with-token                                add the token to your transactions.

EXAMPLES
  transactions:create --api-key=[API-KEY] --environment=[env] -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d customer[email]=john.doe@example.com
  transactions:create --api-key=[API-KEY] --environment=[env] --with-token -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d
  customer[email]=john.doe@example.com
```

## `fedapay transactions:retrieve [options]`

Retrieve a transaction.

```
USAGE
  $ fedapay transactions:retrieve [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for transactions:retrieve command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) ID of the transaction.

EXAMPLE
  transactions:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]
```

## `fedapay transactions:update [options]`

Update a transaction.

```
USAGE
  $ fedapay transactions:update [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for transactions:update command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The transaction ID.

EXAMPLES
  transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=2500
  transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=1780 -d customer[email]=geronimo@apache.com
```

## `fedapay transactions:token [options]`

Generate a payment token for a transaction.

```
USAGE
  $ fedapay transactions:token [options]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for transactions:token command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The transaction ID

EXAMPLE
  transactions:token --api-key=[API-KEY] --environment=[env] --id=[ID]
```

## `fedapay transactions:delete [options]`

Delete a transaction.

```
USAGE
  $ fedapay transactions:delete [options]

OPTIONS
  -c, --confirm                               Skip the warning prompt and automatically confirm the command being entered.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for transactions:delete.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The transaction ID.

EXAMPLES
  transactions:delete --api-key=[api_key] --environment=[env] --id=[ID]
  transactions:delete --api-key=[api_key] --environment=[env] --id=[ID] -c
```
