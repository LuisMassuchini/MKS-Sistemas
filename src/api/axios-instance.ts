import axios from 'axios';

export const axiosConnection = axios.create({
  baseURL: process.env.API_URL,
});
