## `fedapay customers <operation> [options]`

Manage FedaPay customers ressource

```
USAGE
  $ fedapay customers <operation> [options]

OPTIONS
  -h, --help                 Help for customers command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    Customer id to retrieve

EXAMPLES
  customers:list --api-key=api-key --environment=environment --limit=10 
  customers:create --api-key=api-key --environment=environment -d email=foo@bar.com -d firstname=Doe -d lastname=John
  customers:retrieve --api-key=api-key --environment=environment --id=ID
  customers:delete --api-key=api-key --environment=environment -d id=ID
  customers:update --api-key=api-key --environment=environment -d email=moo@bar.com
```

_See code: [src\commands\customers.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers.ts)_

## `fedapay customers <create> [options]`

Create a new customer

```
USAGE
  $ fedapay customers:create [options]

OPTIONS
  -h, --help                 Show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  -d, --data                 Data of the custotmer

EXAMPLES
  customers:create --api-key=api-key --environment=environment -d email=foo@bar.com -d firstname=Doe -d lastname=John
  customers:create --api-key=api-key --environment=environment -d email=foo@bar.com -d firstname=Doe -d lastname=John -d phone_number[number]= 98524125
```

_See code: [src\commands\customers\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\create.ts)_

## `fedapay customers <delete> [options]`

Delete an customer by it's id

```
USAGE
  $ fedapay customers:delete [options]

OPTIONS
  -h, --help                 Show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm=true             [default: false] Confirm the delete
  --environment=environment  FedaPay Api environment
  --id=id                    (required) The id of the customer to delete

EXAMPLES
  customers:delete --api-key=api-key --environment=environment --id=4856
  customers:delete --api-key=api-key --environment=environment --id=4856 --confirm
```

_See code: [src\commands\customers\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\delete.ts)_

## `fedapay customers <list> [options]`

List customers ressource

```
USAGE
  $ fedapay customers:list [options]

OPTIONS
  -h, --help                 show CLI help
  -l, --limit=limit          [default: 25] Limit the list of customers to display
  --api-key=api-key          Your API key to use for the command
  --email=email              Filter the list by the customers email
  --environment=environment  FedaPay Api environment
  --page=page                [default: 1] Specify the page to show

EXAMPLES
  customers:list
  customers:list --api-key=api-key --environment=environment --limit=20
  customers:list --api-key=api-key --environment=environment --email=johndoe@entreprise.com
  customers:list --api-key=api-key --environment=environment --page=2
```

_See code: [src\commands\customers\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\list.ts)_

## `fedapay customers <retrieve> [options]`

Get one customer details by it's ID

```
USAGE
  $ fedapay customers:retrieve [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=ID                    (required) retrieve details of the customer with this id

EXAMPLES
  customers:retrieve --id=ID
```

_See code: [src\commands\customers\retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\retrieve.ts)_

## `fedapay customers <update> [options]`

Udapde an customer informations

```
USAGE
  $ fedapay customers:update [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --confirm=true             [default: false] confirm the update
  -d, --data=data            (required) The new data for the update
  --id=ID                    (required) the id of the customer to update

EXAMPLES
  customers:update --api-key=api-key --environment=environment -d email=foo@bar.com -d firstname=Doe -d lastname=John
  customers:update --api-key=api-key --environment=environment -d email=foo@bar.com -d firstname=Doe -d lastname=John -d phone_number[number]= 98524125
```

_See code: [src\commands\customers\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\customers\update.ts)_