import NP from './actions'

import {
  IAuth,
  ICreatePayout,
  IGetPayoutStatus,
  ICreatePayment,
} from './types'

class NOWPaymentsApi {
  readonly apiKey: string

  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey
  }

  async status() {
    return await NP.status()
  }

  async auth({ email, password }: IAuth) {
    return await NP.auth({ email, password })
  }

  async createPayout({ withdrawals, token }: ICreatePayout) {
    return await NP.createPayout({ apiKey: this.apiKey, withdrawals, token })
  }

  async getPayoutStatus({ payout_id }: IGetPayoutStatus) {
    return await NP.getPayoutStatus({ apiKey: this.apiKey, payout_id })
  }

  async getBalance({ token }) {
    return await NP.getBalance({ apiKey: this.apiKey, token })
  }

  async createPayment({
    price_amount,
    price_currency,
    pay_amount,
    pay_currency,
    ipn_callback_url,
    order_id,
    order_description,
    purchase_id,
    payout_address,
    payout_currency,
    payout_extra_id,
    fixed_rate
  }: ICreatePayment) {
    return await NP.createPayment({
      apiKey: this.apiKey,
      price_amount,
      price_currency,
      pay_amount,
      pay_currency,
      ipn_callback_url,
      order_id,
      order_description,
      purchase_id,
      payout_address,
      payout_currency,
      payout_extra_id,
      fixed_rate
    })
  }
}

export = NOWPaymentsApi
