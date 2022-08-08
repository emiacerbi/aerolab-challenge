import { createContext, useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners'
import { addPoints } from '../services/addPoints'
import { fetchUser } from '../services/fetchUser'
import { redeemProduct } from '../services/redeemProduct'
import { Children, Context, User } from '../types/types'

export const UserContext = createContext<Context | null>(null)

export function UserProvider ({ children }: Children) {
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleAddPoints = (amount: number) => {
    if (!user) throw new Error('Could not get user')

    setIsLoading(true)
    addPoints(amount)
      .then(() => {
        setUser({ ...user, points: user.points + amount })
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const handleRedeemProduct = (producId: string) => {
    setIsLoading(true)
    redeemProduct(producId)
      .then(() => {
        fetchUser()
          .then(res => setUser(res))
          .catch(error => console.error(error))
          .finally(() => setIsLoading(false))
      })
  }

  useEffect(() => {
    fetchUser()
      .then(res => setUser(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  if (!user) {
    return (
      <div className='absolute grid h-full w-full place-content-center'>
        <BounceLoader color='#ff7800' size={100} />
      </div>
    )
  }

  return (
    <UserContext.Provider value={{ user, isLoading, handleAddPoints, handleRedeemProduct }}>
      {children}
    </UserContext.Provider>
  )
}
