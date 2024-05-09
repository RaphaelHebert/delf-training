import axios, { AxiosInstance } from 'axios'
import { authToken } from '@/signals'

// Create a function to configure Axios instance with authorization header
export const configureAxios = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://api.example.com', // Your API base URL
    headers: {
      common: {
        Authorization: `Bearer ${authToken.value}`,
      },
    },
  })

  // You can add interceptors or any additional configuration here if needed

  return instance
}
