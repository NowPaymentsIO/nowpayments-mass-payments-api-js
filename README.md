# NOWPayments Mass Payments API

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A library for interacting with the NOWPayments Mass Payments API.

## Installation

Using npm:

```bash
$ npm install @nowpaymentsio/nowpayments-mass-payments-api-js
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/@nowpaymentsio/nowpayments-mass-payments-api-js/dist/nowpayments-mass-payments-api-js.min.js"></script>
```

## Examples

### Node JS

```js
const NowPaymentsMPApi = require('@nowpaymentsio/nowpayments-mass-payments-api-js');

const api = new NowPaymentsMPApi({ apiKey: 'your-api-key' }) // your api key
async function logBalance() {
  const { token } = await api.auth({ email: 'your-email', password: 'your-password' })
  const balance = await api.getBalance({ token })
  console.log('Get balance: ', balance)
}
logBalance()
```

### React

```js
import React from 'react'
import NowPaymentsMPApi from '@nowpaymentsio/nowpayments-mass-payments-api-js'

const npApi = new NowPaymentsMPApi({ apiKey: 'your-api-key' }) // your api key

const App = () => {
  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    async function fetchBalance() {
      const { token } = await npApi.auth({ email: 'your-email', password: 'your-password' })
      const balance = await npApi.getBalance({ token })
      setBalance(balance)
    }
    fetchBalance()
  }, [])

  return (
    <div>
      <h2>Get balance</h2>
      <br />
      {balance && Object.entries(balance).map(([key, value]) => (
        <p key={key}>{key}-{value.amount}</p>
      ))}
    </div>
  )
}

export default App
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NOWPayments API - HTML Example</title>
  <script src="https://unpkg.com/@nowpaymentsio/nowpayments-mass-payments-api-js/dist/nowpayments-mass-payments-api-js.min.js"></script>
</head>

<body>
<h4>Get balance</h4>
<script>
  const myParent = document.body;
  const api = new NOWPaymentsMPApiJS({ apiKey: 'your-api-key' })

  async function main() {
    const { token } = await api.auth({ email: 'your-email', password: 'your-password' })
    const balance = await api.getBalance({ token })

    if (Object.keys(balance).length) {
      const span = document.createElement("span")
      span.id = "mySelect"
      myParent.appendChild(span)

      for (const [key, value] of Object.entries(balance)) {
        span.innerHTML = `${key} - ${value.amount}`
      }
    }
  }
  main()
</script>
</body>
</html>
```
## Methods
&nbsp;
#### NPApi.auth(params)
Authentication
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
email | null | true | Account email
password | null | true | Account password

#### NPApi.createPayout(params)
This is the method to create a payout
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------
withdrawals  | null | true | Array of objects
token  | null | true | Auth token from NPApi.auth()
```js
withdrawals: [
  {
    address: '', // The address where you want to send funds
    currency: '', // Payout currency
    amount: 0 // Amount of the payout. Must not exceed 6 decimals (i.e. 0.123456)
  }
]
```

#### NPApi.getPayoutStatus(params)
Get estimated price
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
payout_id | null | true | Payout in the request

#### NPApi.getBalance(params)
Get payment status
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
token | null | true | Auth token from NPApi.auth()

#### NPApi.createPayment(params)
Get payout status
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
price_amount | null | true | Fiat equivalent of the price to be paid in crypto
price_currency | null | true | Fiat currency in which the price_amount is specified (usd, eur, etc)
pay_amount | null | false | Amount that users have to pay for the order stated in crypto
pay_currency | null | true | Crypto currency in which the pay_amount is specified (btc, eth, etc)
ipn_callback_url | null | false | Url to receive callbacks, should contain "http" or "https", eg. "https://nowpayments.io"
order_id | null | false | Inner store order ID, e.g. "RGDBP-21314"
order_description | null | false | Inner store order description, e.g. "Apple Macbook Pro 2019 x 1"
purchase_id | null | false | Id of purchase for which you want to create aother
payout_address | null | false | Usually the funds will go to the address you specify in your Personal account. In case you want to receive funds on another address, you can specify it in this parameter
payout_currency | null | false | Currency of your external payout_address, required when payout_adress is specified
payout_extra_id | null | false | Extra id or memo or tag for external payout_address
fixed_rate | null | false | Boolean, can be true or false. Required for fixed-rate exchanges

## Resources

* [Documentation API](https://documenter.getpostman.com/view/7907941/T1DtdF9a)