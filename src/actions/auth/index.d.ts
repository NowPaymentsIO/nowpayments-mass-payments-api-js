import { IAuth, Error } from '../../types';
export interface AuthReturn {
    token: string;
}
declare const auth: ({ email, password, }: IAuth) => Promise<AuthReturn | Error>;
export default auth;
