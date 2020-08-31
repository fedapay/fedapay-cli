## `fedapay payouts:<operation> [parameters...]`

Manage FedaPay payout ressources

```
USAGE
  $ fedapay payouts:<operation> [parameters...]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts command.
  --api-key=api-key                           Your API key to use for the command

COMMANDS
  payouts:create    Create a new payout.
  payouts:delete    Delete a payout.
  payouts:list      List of the payout records.
  payouts:schedule  Schedule a payout to be sent later.
  payouts:send-now  Send payouts.
  payouts:update    Update a payout.

```

## `fedapay payouts:create [options]`

Create a new payout.

```
USAGE
  $ fedapay payouts:create [options]

OPTIONS
 -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -d, --data=data                             (required) Data for the API request.
  -schedule                                   Datetime of the schedule
  -send-now                                   [default:false] send automatically the payout of the specified payout
  -h, --help                                  Help for payouts:create.
  --api-key=api-key                           Your API key to use for the command

EXAMPLE
  payouts:create  -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d payout[firstname]=Qan payout[lastname]=Sally payout[email]=nal@exemple.com payout[phone_number][number]=65423158 payout[phone_number][country]=bj
  payouts:create  -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d payout[id]=[ID]
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d payout[id]=[ID] --schedule="2020-8-12 11:41:51"
  payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d payout[id]=[ID] --send-now

```

## `fedapay payouts:delete [options]`

```
Delete a payout.

USAGE
  $ fedapay payouts:delete [options]

OPTIONS
  -c, --confirm                               Skip the warning prompt and automatically confirm the command being entered.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts:delete.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The payout ID.

EXAMPLES
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID]
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c

```

## `fedapay payouts:list [options]`

```
List of the payout records.

USAGE
  $ fedapay payouts:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -f, --filters=filters                       Filter the list of payouts.
  -h, --help                                  Help for payouts:list
  -l, --limit=limit                           [default: 10] Limit of records to display.
  -p, --page=page                             [default: 1] The page of the records to display.
  --api-key=api-key                           Your API key to use for the command

EXAMPLES
  payouts:list
  payouts:list --api-key=[API-KEY] --environment=[env] --limit=20
  payouts:list --api-key=[API-KEY] --environment=[env] -page=2

```
## `fedapay payouts:delete [options]`

```
Delete a payout.

USAGE
  $ fedapay payouts:delete [options]

OPTIONS
  -c, --confirm                               Skip the warning prompt and automatically confirm the command being entered.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts:delete.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The payout ID.

EXAMPLES
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID]
  payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c

```

## `fedapay payouts:schedule [options]`

```
Schedule a payout to be sent later.

USAGE
  $ fedapay payouts:list [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts:list
  -w, --when                            (required)The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss GMT.
  --api-key=api-key                           Your API key to use for the command
  --id=id                                     (required) The payout ID.

EXAMPLES
  payouts:schedule --id=[ID] --when="2020-8-12 11:41:51"
  payouts:schedule --api-key=[API-KEY] --environment=[env] --id=[ID] --when="2020-8-12 11:41:51"

```

## `fedapay payouts:send-now [options]`

```
USAGE
  $ fedapay payouts:send-now [options]

OPTIONS
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts:send-now.
  --api-key=api-key                           Your API key to use for the command
  -id                                     (required) The payouts id.

EXAMPLES
  payouts:send-now --id=105
  payouts:send-now --id=105 --id=108"

```
## `fedapay payouts:update  [options]`

```
USAGE
  $ fedapay payouts:update [options]

OPTIONS
  -d, --data=data                             (required) Data for the API request.
  -e, --environment=development|sandbox|live  [default: sandbox] FedaPay Api environment
  -h, --help                                  Help for payouts:update command.
  --api-key=api-key                           Your API key to use for the command
  --id=id

EXAMPLES
  payouts:update --api-key=[API-KEY] --environment=[env] --id=90 -d amount=550 -d currency[iso]=XOF -d 
  mode=moov -d customer[firstname]=Yu customer[lastname]=Ma customer[email]=vul@exemple.com 
  customer[phone_number][number]=65423158 customer[phone_number][country]=bj
  payouts:update --api-key=[API-KEY] --environment=[env] --id=109 -d customer[id]=2055
  
```
