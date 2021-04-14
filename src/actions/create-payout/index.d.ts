import { ICreatePayout, Error } from '../../types';
export declare type CreatePayoutReturn = {
    id: string;
    withdrawals: {
        id: number;
        address: string;
        currency: string;
        amount: number;
        batchWithdrawalId: number;
        status: string;
        extraId: string;
        hash: string;
        error: string;
        createdAt: string;
        requestedAt: string;
        updatedAt: string;
    }[];
};
export interface CreatePayout extends ICreatePayout {
    apiKey: string;
}
declare const createPayout: ({ apiKey, withdrawals, token, }: CreatePayout) => Promise<CreatePayoutReturn | Error>;
export default createPayout;
