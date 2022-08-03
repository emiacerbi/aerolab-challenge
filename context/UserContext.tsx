import { createContext, ReactNode, useEffect, useState } from 'react'
import { fetchuser } from '../services/fetchUser'

type User = {
  _id: string
  name: string
  points: number
  createDate: string
}

type Context = {
  user: User
  isLoading: boolean
}

type Children = {
  children: ReactNode
}

export const UserContext = createContext<Context | null>(null)

export function UserProvider ({ children }: Children) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchuser()
      .then(res => setUser(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  if (!user) return <h1>Loading...</h1>

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
