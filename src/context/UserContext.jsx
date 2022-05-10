import { React, createContext, useEffect, useState } from 'react';
import { addPoints, getProducts, getUser, redeemProduct } from '../api/api';

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const updatePoints = async (points) => {
    setIsLoading(true)
    return addPoints(points).then(res => {
      setUser({ ...user, points: res.data['New Points'] })
      setIsLoading(false)
    })
  }

  const handleRedeem = async (id) => {
    setIsLoading(true)
    return redeemProduct(id)
      .then((res) => {
        console.log(res)
        getUser()
          .then((res) => setUser(res))
          .then(() => setIsLoading(false))
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getUser()
      .then((res) => {
        console.log('usuario llamado')
        setUser(res)
      });
    getProducts()
      .then((res) => setProducts(res));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        products,
        updatePoints,
        handleRedeem,
        isLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
