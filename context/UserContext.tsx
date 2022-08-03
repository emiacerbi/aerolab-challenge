import { createContext, ReactNode, useEffect, useState } from 'react'
import { addPoints } from '../services/addPoints'
import { fetchUser } from '../services/fetchUser'

type User = {
  _id: string
  name: string
  points: number
}

type Context = {
  user: User
  isLoading: boolean
  handleAddPoints: Function
}

type Children = {
  children: ReactNode
}

export const UserContext = createContext<Context | null>(null)

export function UserProvider ({ children }: Children) {
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleAddPoints = (amount: number) => {
    if (!user) throw new Error('Could not get user')

    addPoints(amount)
      .then((res) => {
        setUser({ ...user, points: user.points + amount })
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchUser()
      .then(res => setUser(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  if (!user) return <h1>Loading...</h1>

  return (
    <UserContext.Provider value={{ user, isLoading, handleAddPoints }}>
      {children}
    </UserContext.Provider>
  )
}
