## `fedapay customers:<operation> [parameters...]`

Manage FedaPay customer ressources

```
USAGE
  $ fedapay customers:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  FedaPay Api environment
  -h, --help                                  Help for customers command.
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  customers:create    Create a new customer.
  customers:delete    Delete a customer.
  customers:list      List of the customer records.
  customers:retrieve  Retrieve a customer.
  customers:update    Update a customer.
```

## `fedapay customers:create [options]`

Create a new customer.

```
USAGE
  $ fedapay customers:create [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for customers:create.
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  customers:create --api-key=[API-KEY] --environment=[env] -d firstname=John -d lastname=Doe -d email=customertest1@tom.com -d phone_number[number]=68452896 -d phone_number[country]=BJ
```

## `fedapay customers:delete [options]`

```
Delete a customer.

USAGE
  $ fedapay customers:delete [options]

OPTIONS
  -c, --confirm                               Skip the warning prompt and automatically confirm the command being entered.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for customers:delete.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The customer ID.

EXAMPLES
  customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID]
  customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c
```

## `fedapay customers:list [options]`

```
List of the customer records.

USAGE
  $ fedapay customers:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filters=filters                       Filter the list of customers.
  -h, --help                                  Help for customers:list
  -l, --limit=limit                           [default: 10] Limit of records to display.
  -p, --page=page                             [default: 1] The page of the records to display.
  --api-key=api-key                           Your API key to use for the command

EXAMPLES
  customers:list
  customers:list --api-key=[API-KEY] --environment=[env] --limit=20
  customers:list --api-key=[API-KEY] --environment=[env] -p=2
```

## `fedapay customers:retrieve [options]`

```
Retrieve a customer.

USAGE
  $ fedapay customers:retrieve [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for customers:retrieve command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) ID of the customer.

EXAMPLE
  customers:retrieve --api-key=[API-KEY] --environment=[env] --id=5
```

## `fedapay customers:update [options]`

```
Update a customer.

USAGE
  $ fedapay customers:update [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for customers:update command.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The customer ID.

EXAMPLES
  customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com
  customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com -d lastname=Doe
```
