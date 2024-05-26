import { Scores } from '@/type/dice'
import { configureAxios } from './helpers'

export async function scores(): Promise<Scores> {
  const axiosInstance = configureAxios()
  const response = await axiosInstance.get(`/scores`)
  return response.data
}
