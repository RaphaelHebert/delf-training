import { configureAxios } from './helpers'
import { Score, DiceRoll } from '@/type/dice'
import { v4 as uuidv4 } from 'uuid'

export async function fetchDiceRolls(n: number): Promise<{
  data: Score
}> {
  const axiosInstance = configureAxios()
  return axiosInstance.get(`/roll-dices?n=${n}`)
}

export const fetchDiceRollsMock = async (
  n: number
): Promise<{
  data: Score
}> => {
  // Simulate delay
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // Generate random dice rolls
  const res: DiceRoll = []
  for (let i = 0; i < n; i++) {
    res.push(Math.floor(Math.random() * 6) + 1)
  }

  return new Promise((resolve) =>
    resolve({ data: { score: res, uid: uuidv4() } })
  )
}
