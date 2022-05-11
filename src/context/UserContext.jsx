import { React, createContext, useEffect, useState } from 'react';
import { addPoints, getProducts, getUser, redeemProduct } from '../api/api';
import { Spinner } from '../components/Spinner';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [points, setPoints] = useState()

  const updatePoints = async (points) => {
    setIsLoading(true)
    return addPoints(points).then(res => {
      setUser({ ...user })
      setPoints(res.data['New Points'])
      setIsLoading(false)
    })
  }

  const handleRedeem = async (id) => {
    setIsLoading(true)
    return redeemProduct(id)
      .then((res) => {
        // console.log(res)
        getUser()
          .then((res) => {
            setUser(res)
            setPoints(res.points)
          })
          .then(() => {
            setIsLoading(false)
            Swal.fire(
              'Product added!',
              'Thank you for your purchase!',
              'success'
            )
          })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log('called')
        setUser(res)
        setPoints(res.points)
      });
    getProducts()
      .then((res) => setProducts(res));
  }, []);

  if (!user && !products) {
    return (
      <Spinner color="rgba(255, 136, 0, 1)" size={100} />
    )
  }

  return (
    <UserContext.Provider
      value={{
        user,
        products,
        updatePoints,
        handleRedeem,
        isLoading,
        points,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
