
const BASE_URL = process.env.NEXT_PUBLIC_POINTS_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

export async function addPoints (amount: number) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: `{"amount":${amount}}`
  }

  try {
    const response = await fetch(BASE_URL!, options)
    const points = await response.json()
    return points
  } catch (err) {
    return console.error(err)
  }
}
