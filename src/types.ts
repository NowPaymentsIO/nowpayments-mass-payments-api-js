export interface IAuth {
  email: string
  password: string
}

export interface ICreatePayout {
  withdrawals: {
    address: string
    currency: string
    amount: number
  }[]
  token: string
}

export interface IGetPayoutStatus {
  payout_id: string
}

export interface ICreatePayment {
  price_amount: number
  price_currency: string
  pay_amount?: number
  pay_currency: string
  ipn_callback_url?: string
  order_id?: string
  order_description?: string
  purchase_id?: string
  payout_address?: string
  payout_currency?: string
  payout_extra_id?: string
  fixed_rate?: string
}

export interface Error {
  errors?: []
  message?: string
}
