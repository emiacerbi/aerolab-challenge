import toast from 'react-hot-toast'

export async function redeemProduct (productId: string) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId })
  }

  try {
    const response = await fetch('/api/redeem', options)
    const data = await response.json()
    toast.success('Thank you for your purchase!')
    return data
  } catch (err) {
    toast.error('There was a mistake, please try again later.')
    return console.error(err)
  }
}
