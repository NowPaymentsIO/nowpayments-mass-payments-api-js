import { Error } from '../../types';
export declare type GetBalanceReturn = {
    [key: string]: {
        amount: number;
        pendingAmount: number;
    };
};
declare const getBalance: ({ apiKey, token, }: {
    apiKey: string;
    token: string;
}) => Promise<GetBalanceReturn | Error>;
export default getBalance;
