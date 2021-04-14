import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export type GetBalanceReturn = {
  [key: string]: {
    amount: number,
    pendingAmount: number
  }
}

const getBalance = async ({
  apiKey,
  token,
}: { apiKey: string, token: string }): Promise<GetBalanceReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/balance', null, token)
  return data
}

export default getBalance
