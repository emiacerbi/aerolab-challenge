const BASE_URL = process.env.NEXT_PUBLIC_REDEEM_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

export async function redeemProduct (productId: string) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: `{"productId":${productId}}`
  }

  try {
    const response = await fetch(BASE_URL!, options)
    const data = await response.json()
    return console.log(data)
  } catch (err) {
    return console.error(err)
  }
}
