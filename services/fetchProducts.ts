const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const TOKEN = process.env.NEXT_PUBLIC_TOKEN

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}

export async function fetchProducts () {
  try {
    const response = await fetch(BASE_URL!, options)
    const data = await response.json()
    return console.log(data)
  } catch (err) {
    return console.error(err)
  }
}
