import ConnectApi from '../../utils/connect-api'
import { IAuth, Error } from '../../types'

export interface AuthReturn {
  token: string
}

const auth = async ({
  email,
  password,
}: IAuth): Promise<AuthReturn | Error> => {
  const API = new ConnectApi()

  const { data } = await API.post('/auth', {
    email,
    password,
  })
  return data
}

export default auth
