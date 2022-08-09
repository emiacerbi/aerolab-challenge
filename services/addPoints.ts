import toast from 'react-hot-toast'

export async function addPoints (amount: number) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `{"amount":${amount}}`
  }

  try {
    const response = await fetch('/api/user/points', options)
    const points = await response.json()
    toast.success('Succesfully added points !')
    return points
  } catch (error) {
    toast.error('There was a mistake, please try again later!')
    return console.error(error)
  }
}
