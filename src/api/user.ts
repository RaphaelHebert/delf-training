import axios from 'axios'
import { configureAxios } from './helpers'

import { IUser, IUserLogin } from '@/type/user'
import { Scores } from '@/type/dice'

const base_URL = import.meta.env.VITE_API_BASE_URL

export async function addUser(user: IUserLogin): Promise<IUser> {
  const response = await axios.put(`${base_URL}/user`, user)
  return response.data as IUser
}

export async function deleteUser(user: IUser): Promise<void> {
  await axios.delete(`${base_URL}/user/?id=${user.uid}`)
}

export async function updateUser(user: IUser): Promise<IUser> {
  const response = await axios.post(`${base_URL}/user/?id=${user.uid}`, user)
  return response.data as IUser
}

export async function getUserById(id: string): Promise<IUser> {
  const axiosInstance = configureAxios()

  const response = await axiosInstance.get(`${base_URL}/user?id=${id}`)
  return response.data as IUser
}

export async function scores(): Promise<Scores> {
  const axiosInstance = configureAxios()
  return axiosInstance.get(`/scores`)
}
