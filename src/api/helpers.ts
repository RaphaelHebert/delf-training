import axios, { AxiosInstance } from 'axios'
import { authToken } from '@/signals'

// Create a function to configure Axios instance with authorization header
export const configureAxios = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Your API base URL
    headers: {
      common: {
        Authorization: `bearer ${authToken.value}`,
      },
    },
  })

  // You can add interceptors or any additional configuration here if needed

  return instance
}
