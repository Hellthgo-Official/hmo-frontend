import axios from "axios";

// const BASE_URL = 'https://healthgo-hmo.onrender.com/api/v2';
const BASE_URL = "http://localhost:9000/api/v2";

export const authApi = axios.create({
  baseURL: BASE_URL
});
