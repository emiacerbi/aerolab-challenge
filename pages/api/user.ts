import { NextApiRequest, NextApiResponse } from 'next'
const BASE_URL = process.env.NEXT_PUBLIC_USER_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(BASE_URL!, options)
    const data = await response.json()
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
}
