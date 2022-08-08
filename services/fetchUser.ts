export async function fetchUser () {
  try {
    const response = await fetch('/api/user')
    const data = await response.json()
    return data
  } catch (err) {
    return console.error(err)
  }
}
