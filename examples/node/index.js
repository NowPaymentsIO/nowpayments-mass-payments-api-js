const NOWPaymentsApi = require('@nowpayments/nowpayments-mass-payments-api-js')

const NPApi = new NOWPaymentsApi({ apiKey: 'your-api-key' })

async function main() {
  console.log('NOWPayments Mass Payments API - Example Node')
  const { token } = await NPApi.auth({ email: 'your-email', password: 'your-password' })
  const balance = await NPApi.getBalance({ token })
  console.log('Get balance: ', balance)
}

main()
