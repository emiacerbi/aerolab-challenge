import { React, createContext, useEffect, useState } from 'react';
import { getProducts, getUser } from '../api/api';

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log('peticion')
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
