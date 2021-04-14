import ConnectApi from '../../utils/connect-api'
import { ICreatePayout, Error } from '../../types'

export type CreatePayoutReturn = {
  id: string
  withdrawals: {
    id: number,
    address: string,
    currency: string,
    amount: number,
    batchWithdrawalId: number,
    status: string,
    extraId: string,
    hash: string,
    error: string,
    createdAt: string,
    requestedAt: string,
    updatedAt: string
  }[]
}

export interface CreatePayout extends ICreatePayout {
  apiKey: string
}

const createPayout = async ({
  apiKey,
  withdrawals,
  token,
}: CreatePayout): Promise<CreatePayoutReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.post('/payout', { withdrawals }, token)
  return data
}

export default createPayout
