import { IGetPayoutStatus, Error } from '../../types';
export declare type GetPayoutStatusReturn = {
    id: string;
    createdAt: string;
    withdrawals: {
        batchWithdrawalId: string;
        address: string;
        currency: string;
        amount: number;
        extraId: string;
        hash: string;
        error: string;
        updatedAt: string;
        requestedAt: string;
        status: string;
    }[];
};
export interface GetPayoutStatus extends IGetPayoutStatus {
    apiKey: string;
}
declare const getPayoutStatus: ({ apiKey, payout_id, }: GetPayoutStatus) => Promise<GetPayoutStatusReturn | Error>;
export default getPayoutStatus;
