import axios from 'axios';

const BASE_URL = 'https://healthgo-hmo.onrender.com/api/v2';
// const BASE_URL = "https://localhost:9000/api/v2";

export const authApi = axios.create({
  baseURL: BASE_URL,
});

export const walletApi = axios.create({
  baseURL: `${BASE_URL}/toronet`,
});

export const planApi = axios.create({
  baseURL: `${BASE_URL}/toronet`,
});

