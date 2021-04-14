declare const _default: {
    status: () => Promise<import("./status").StatusReturn | import("../types").Error>;
    auth: ({ email, password, }: import("../types").IAuth) => Promise<import("../types").Error | import("./auth").AuthReturn>;
    createPayout: ({ apiKey, withdrawals, token, }: import("./create-payout").CreatePayout) => Promise<import("../types").Error | import("./create-payout").CreatePayoutReturn>;
    getPayoutStatus: ({ apiKey, payout_id, }: import("./get-payout-status").GetPayoutStatus) => Promise<import("../types").Error | import("./get-payout-status").GetPayoutStatusReturn>;
    getBalance: ({ apiKey, token, }: {
        apiKey: string;
        token: string;
    }) => Promise<import("../types").Error | import("./get-balance").GetBalanceReturn>;
    createPayment: ({ apiKey, price_amount, price_currency, pay_amount, pay_currency, ipn_callback_url, order_id, order_description, purchase_id, payout_address, payout_currency, payout_extra_id, fixed_rate }: import("./create-payment").CreatePayment) => Promise<import("../types").Error | import("./create-payment").CreatePaymentReturn>;
};
export default _default;
