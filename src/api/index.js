import axios from "axios";

const BASE_URL = 'https://healthgo-hmo.onrender.com/api/v2';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Accept': '*/*'
  }
})