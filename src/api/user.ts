import axios from 'axios'

import { IUser, IUserLogin } from '@/type/user'
const base_URL = import.meta.env.VITE_API_BASE_URL

export async function addUser(user: IUserLogin): Promise<IUser> {
  const response = await axios.put(`${base_URL}/user`, user)
  return response.data as IUser
}