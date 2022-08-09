import { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_REDEEM_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId } = req.body

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ productId })
  }

  try {
    const response = await fetch(BASE_URL!, options)
    const data = await response.json()
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
}
