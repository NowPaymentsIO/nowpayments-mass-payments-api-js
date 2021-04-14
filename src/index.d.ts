import { IAuth, ICreatePayout, IGetPayoutStatus, ICreatePayment } from './types';
declare class NOWPaymentsApi {
    readonly apiKey: string;
    constructor({ apiKey }: {
        apiKey: string;
    });
    status(): Promise<import("./actions/status").StatusReturn | import("./types").Error>;
    auth({ email, password }: IAuth): Promise<import("./types").Error | import("./actions/auth").AuthReturn>;
    createPayout({ withdrawals, token }: ICreatePayout): Promise<import("./types").Error | import("./actions/create-payout").CreatePayoutReturn>;
    getPayoutStatus({ payout_id }: IGetPayoutStatus): Promise<import("./types").Error | import("./actions/get-payout-status").GetPayoutStatusReturn>;
    getBalance({ token }: {
        token: any;
    }): Promise<import("./types").Error | import("./actions/get-balance").GetBalanceReturn>;
    createPayment({ price_amount, price_currency, pay_amount, pay_currency, ipn_callback_url, order_id, order_description, purchase_id, payout_address, payout_currency, payout_extra_id, fixed_rate }: ICreatePayment): Promise<import("./types").Error | import("./actions/create-payment").CreatePaymentReturn>;
}
export = NOWPaymentsApi;
