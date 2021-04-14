const NOWPaymentsApi = require('@nowpayments/nowpayments-mass-payments-api-js')

const NPApi = new NOWPaymentsApi({ apiKey: '4WHVF3X-E61MR3A-PM6HKW4-CBF7JVQ' })

async function main() {
  console.log('NOWPayments Mass Payments API - Example Node')
  const { token } = await NPApi.auth({ email: 'kate.l@nowpayments.io', password: 'bogdan' })
  const balance = await NPApi.getBalance({ token })
  console.log('Get balance: ', balance)
}

main()
