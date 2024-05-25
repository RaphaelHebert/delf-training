import axios from 'axios'
import { ILoginInput, ILoginResponse } from '@/type'
import { configureAxios } from './helpers'

const base_URL = import.meta.env.VITE_API_BASE_URL

export async function login(loginInput: ILoginInput): Promise<ILoginResponse> {
  const response = await axios.post(`${base_URL}/login`, loginInput)
  return response.data as ILoginResponse
}
export async function token(): Promise<ILoginResponse> {
  const axiosInstance = configureAxios()

  const response = await axiosInstance.get(`${base_URL}/token`)
  return response.data as ILoginResponse
}
