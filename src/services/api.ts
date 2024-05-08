import axios from 'axios'

const API_BASE_URL = 'https://example.com/api'

export async function fetchDiceRolls() {
  return axios.get(`${API_BASE_URL}/roll-dice`)
}

export interface Idata {
  roll1: number
  roll2: number
  roll3: number
}

export const fetchDiceRollsMock = async (): Promise<{
  data: Idata
}> => {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // Generate random dice rolls
  const roll1 = Math.floor(Math.random() * 6) + 1
  const roll2 = Math.floor(Math.random() * 6) + 1
  const roll3 = Math.floor(Math.random() * 6) + 1
  return new Promise((resolve) => resolve({ data: { roll1, roll2, roll3 } }))
}
