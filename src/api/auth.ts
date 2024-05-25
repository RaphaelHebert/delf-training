import axios from 'axios'
import { configureAxios } from './helpers'

const base_URL = import.meta.env.VITE_API_BASE_URL

export interface ILoginInput {
  email: string
  password: string
}
export interface ILoginResponse {
  status: string
  message: string
  data: string
}

export async function login(loginInput: ILoginInput): Promise<ILoginResponse> {
  const response = await axios.post(`${base_URL}/login`, loginInput)
  return response.data as ILoginResponse
}

export async function token(): Promise<ILoginResponse> {
  const axiosInstance = configureAxios()

  const response = await axiosInstance.get(`${base_URL}/token`)
  return response.data as ILoginResponse
}
