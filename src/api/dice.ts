import { configureAxios } from './helpers'
import { DiceRoll } from '@/signals'

const axiosInstance = configureAxios()

export async function fetchDiceRolls(n: number): Promise<{
  data: DiceRoll
}> {
  return axiosInstance.get(`/roll-dices?n=${n}`)
}

export const fetchDiceRollsMock = async (
  n: number
): Promise<{
  data: DiceRoll
}> => {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // Generate random dice rolls
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    res.push(Math.floor(Math.random() * 6) + 1)
  }

  return new Promise((resolve) => resolve({ data: res }))
}
