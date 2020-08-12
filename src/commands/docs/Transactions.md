## `fedapay transactions <operation> [options]`

Here you can manage your transaction

```
USAGE
  $ fedapay transactions <operation> [options]

OPTIONS
  -h, --help                 Help for transactions command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment

EXAMPLES
    'transactions:list --api-key=[api_key] --environment=environment --limit=15',
    'transactions:create --api-key=[api_key] --environment=environment -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com',,
    'transactions:update --api-key=[api_key] --environment=environment --id=52123 -d amount=1780, -d customer[email]=geronimo@apache.com --confirm',
    'transactions:token --api-key=[api_key] --environment=environment --id=12321',
    'transactions:delete --api-key=[api_key] --environment=environment --id=12321',
    'transactions:retrieve --api-key=[api_key] --environment=environment --id=12321',
   
```

_See code: [src/commands/transactions.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions.ts)_

## `fedapay transactions <create> [options]`

Create a Transaction

```
USAGE
  $ fedapay transactions:create [options]

OPTIONS

  -h, --help                        show CLI help
  --api-key=api-key                 Your API key to use for the command
  --data=data                       (required) provide all the intel of your transactions
  --environment=environment         FedaPay Api environment
  --with_token                      add the token to your transactions

EXAMPLES
    'transactions:create --api-key=[api_key] --environment=environment -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com',
    'transactions:create --api-key=[api_key] --environment=environment --with_token -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com'
```

_See code: [src/commands/transactions/create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/create.ts)_

## `fedapay transactions:update [options]`

Update some transactions

```
USAGE
  $ fedapay transactions:update [options]

OPTIONS
  -h, --help                       show CLI help
  --api-key=api-key                Your API key to use for the command
  --confirm                        Update your data
  --data=data                      (required) Provide the data you want to update
  --environment=environment        FedaPay Api environment
  --id=id  (required) Provide the id of the transaction you want to update

EXAMPLES
  'transactions:update --api-key=[api_key] --environment=environment --id=12321 -d amount=2500, -d          description=Sending money to mum -d currency[iso]=XOF',
  'transactions:update --api-key=[api_key] --environment=environment --id=52123 -d amount=1780, -d customer[email]=geronimo@apache.com --confirm'
  ```

_See code: [src/commands/transactions/update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/update.ts)_

## `fedapay transactions <retrieve> [options]`

retrieve a transaction thanks to its id

```
USAGE
  $ fedapay transactions:retrieve [options]

OPTIONS
  -h, --help                       show CLI help
  --api-key=api-key                Your API key to use for the command
  --environment=environment        FedaPay Api environment
  --id=id  (required) Provide the id of the transaction you want to retrieve

EXAMPLES
   'transactions:retrieve --api-key=[api_key] --environment=environment --id=12321',
```

_See code: [src/commands/transactions/retrieve.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/retrieve.ts)_

## `fedapay transactions <delete> [options]`

Delete a transaction

```
USAGE
  $ fedapay transactions:delete [options]

OPTIONS
  -h, --help                       show CLI help
  --api-key=api-key                Your API key to use for the command
  --confirm                        Bypass the confirmation of deletion
  --environment=environment        FedaPay Api environment
  --id=id  (required) Provide the id of the transaction you want to delete

EXAMPLES
  'transactions:delete --api-key=[api_key] --environment=environment --id=12321',
  'transactions:delete --api-key=[api_key] --environment=environment --id=12321 --confirm',
```

_See code: [src/commands/transactions/delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/delete.ts)_

## `fedapay transactions:<token> [options]`

Add a token to a transaction

```
USAGE
  $ fedapay transactions:token [options]

OPTIONS
  -h, --help                       show CLI help
  --api-key=api-key                Your API key to use for the command
  --environment=environment        FedaPay Api environment
  --id=id  (required) Provide the id of the transaction you want to tokenize

EXAMPLES
'transactions:token --api-key=[api_key] --environment=environment --id=12321'
```

_See code: [src/commands/transactions/token.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/token.ts)_

## `fedapay transactions <list> [options]`

List of the transactions ressources

```
USAGE
  $ fedapay transactions:list [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --limit=limit              [default: 25] define a limit per result
  --page=page                [default: 1] display the result by page number

EXAMPLES
  'transactions:list --api-key=[api_key] --environment=environment --limit=15'
  'transactions:list --api-key=[api_key] --environment=environment --page=5'
```

_See code: [src/commands/transactions/list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src/commands/transactions/list.ts)_