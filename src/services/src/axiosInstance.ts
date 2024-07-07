import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';
dotenv.config();
// Create an instance of axios with default URL
const instance: AxiosInstance = axios.create({
    baseURL: process.env.RAYDIUM_API_URL,
});

export default instance;