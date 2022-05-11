import axios from 'axios';
import Swal from 'sweetalert2';

const userEndpoint = 'https://coding-challenge-api.aerolab.co/user/me';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZiNDk1NWJkODhkOTAwMjEwNDU0YzkiLCJpYXQiOjE2NTExOTgyOTN9.YH-vX2EdD024ELdc41REGlbz-3Zx7Fsnm1totU9qCZ4';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getUser = async () => axios.get(userEndpoint, config)
  .then((res) => res.data)
  .catch((err) => {
    console.log(err)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  });

const pointsEndpoint = 'https://coding-challenge-api.aerolab.co/user/points';

export const addPoints = async (amount) => axios.post(pointsEndpoint, {
  amount,
}, config)
  .then((res) => res)
  .catch((err) => {
    console.log(err)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  });

const productsEndpoint = 'https://coding-challenge-api.aerolab.co/products';

export const getProducts = async () => {
  return axios.get(productsEndpoint, config)
    .then((res) => res)
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
}

const redeemProductEndpoint = 'https://coding-challenge-api.aerolab.co/redeem'

export const redeemProduct = async (prodId) => {
  return axios.post(redeemProductEndpoint, {
    'productId': prodId
  }, config)
    .then((res) => res)
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
}
