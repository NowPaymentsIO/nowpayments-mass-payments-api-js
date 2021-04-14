import ConnectApi from '../../utils/connect-api'
import { IGetPayoutStatus, Error } from '../../types'

export type GetPayoutStatusReturn = {
  id: string
  createdAt: string
  withdrawals: {
    batchWithdrawalId: string
    address: string
    currency: string
    amount: number
    extraId: string
    hash: string
    error: string
    updatedAt: string
    requestedAt: string
    status: string
  }[]
}

export interface GetPayoutStatus extends IGetPayoutStatus {
  apiKey: string
}

const getPayoutStatus = async ({
  apiKey,
  payout_id,
}: GetPayoutStatus): Promise<GetPayoutStatusReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get(`/payout/${payout_id}`)
  return data
}

export default getPayoutStatus
