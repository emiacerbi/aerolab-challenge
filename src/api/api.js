import axios from 'axios';

const userEndpoint = 'https://coding-challenge-api.aerolab.co/user/me';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZiNDk1NWJkODhkOTAwMjEwNDU0YzkiLCJpYXQiOjE2NTExOTgyOTN9.YH-vX2EdD024ELdc41REGlbz-3Zx7Fsnm1totU9qCZ4';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getUser = async () => axios.get(userEndpoint, config)
  .then((res) => res.data)
  .catch((err) => console.log(err));

const pointsEndpoint = 'https://coding-challenge-api.aerolab.co/user/points';

export const addPoints = async (amount) => axios.post(pointsEndpoint, {
  amount,
}, config)
  .then((res) => res)
  .catch((err) => console.log(err));

const productsEndpoint = 'https://coding-challenge-api.aerolab.co/products';

export const getProducts = async () => axios.get(productsEndpoint, config)
  .then((res) => res)
  .catch((err) => console.log(err));
