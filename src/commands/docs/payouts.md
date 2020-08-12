## `fedapay payouts <operation> [options]`

Manage FedaPay payouts ressource

```
USAGE
  $ fedapay payouts <operation> [options]

OPTIONS
  -h, --help                 Help for payouts command
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=id                    Payout id to retrieve

EXAMPLES
  payouts:list --api-key=api-key --environment=environment --limit=10
  payouts:create --api-key=api-key --environment=environment -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj 
  payouts:update --api-key=api-key --environment=environment -d id=105
  payouts:delete --api-key=api-key --environment=environment --id=85 
  payouts:delete --api-key=api-key --environment=environment --id--confirm
  payouts:schedule --api-key=api-key --environment=environment -d id='id=101'
  payouts:send-now --api-key=api-key --environment=environment --id='id=105,id=103'
```

_See code: [src\commands\payouts.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts.ts)_

## `fedapay payouts <create> [options]`

Create a new payout

```
USAGE
  $ fedapay payouts:create [options]

OPTIONS
  -h, --help                 Show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  -d, --data                 Data of the payout

EXAMPLES
  payouts:create --api-key=api-key --environment=environment -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 
  payouts:create --api-key=api-key --environment=environment -d -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com 
  payouts:create --api-key=api-key --environment=environment -d -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com --schedule="2020-8-12 11:41:51"
  payouts:create --api-key=api-key --environment=environment -d -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com --sendnow

```

_See code: [src\commands\payouts\create.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\create.ts)_

## `fedapay payouts <delete> [options]`

Delete a payout by it's id

```
USAGE
  $ fedapay payouts:delete [options]

OPTIONS
  -h, --help                 Show CLI help
  --api-key=api-key          Your API key to use for the command
  --confirm=true             [default: false] Confirm the delete
  --environment=environment  FedaPay Api environment
  --id=id                    (required) The id of the payout
  --ids=108,102..,.           The ids of the payout selected

EXAMPLES
  payouts:delete --api-key=api-key --environment=environment --id=4856
  payouts:delete --api-key=api-key --environment=environment --id=4856 --confirm
  payouts:delete --api-key=api-key --environment=environment --ids=4856,78612 
```

_See code: [src\commands\payouts\delete.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\delete.ts)_

## `fedapay payouts <list> [options]`

List payouts ressource

```
USAGE
  $ fedapay payouts:list [options]

OPTIONS
  -h, --help                 show CLI help
  -l, --limit=limit          [default: 25] Limit the list of payouts to display
  --api-key=api-key          Your API key to use for the command
  --customer=ID              Filter the list by the customer id
  --environment=environment  FedaPay Api environment
  --page=page                [default: 1] Specify the page to show
  --status=status            [default: failed] Filter the list by the payout status

EXAMPLES
  payouts:list
  payouts:list --api-key=[api_key] --environment=sandbox --limit=20
  payouts:list --api-key=[api_key] --environment=sandbox --page=2
  payouts:list --api-key=[api_key] --environment=sandbox--customer=2055
  payouts:list --api-key=[api_key] --environment=sandbox --status=failed
```

_See code: [src\commands\payouts\list.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\list.ts)_

## `fedapay payouts <schedule> [options]`

Schedule the payout with date for later 

```
USAGE
  $ fedapay payouts:schedule [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id=ID                    (required) retrieve details of the payout with this id
  --when=date                (required) set the format date to schedule the payout

EXAMPLES
  payouts:schedule --id=102 --when="2020-8-12 11:41:51"
```

_See code: [src\commands\payouts\schedule.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\schedule.ts)_
## `fedapay payouts <send-now> [options]`

Send the or all payouts automatically

```
USAGE
  $ fedapay payouts:send-now [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --id='id=102,103'              send all payouts now with ids 

EXAMPLES
  payouts:send-now --id='id=102'
```

_See code: [src\commands\payouts\send-now.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\send-now.ts)_


## `fedapay payouts <update> [options]`

Udapde an customer informations

```

USAGE
  $ fedapay payouts:update [options]

OPTIONS
  -h, --help                 show CLI help
  --api-key=api-key          Your API key to use for the command
  --environment=environment  FedaPay Api environment
  --confirm=true             [default: false] confirm the update
  -d, --data=data            (required) The new data for the update
  --id=ID                    (required) the id of the payout to update
  --customer=customer        The customer to update for the payout

EXAMPLES
  payouts:update --api-key=[api_key] --environment=sandbox --id=57 --customer=103
  payouts:update --api-key=[api_key] --environment=sandbox --id=90 -d amount=550 -d currency[iso]=XOF -d mode=moov -d customer[firstname]=Yu customer[lastname]=Ma customer[email]=vul@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj,
  payouts:update --api-key=[api_key] --environment=sandbox  --id=109 --confirm
  payouts:update --api-key=[api_key] --environment=sandbox  --id=109 --customer=1402
```

_See code: [src\commands\payouts\update.ts](https://github.com/brexis/fedapay-cli/blob/v0.0.0/src\commands\payouts\update.ts)_
