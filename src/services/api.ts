import axios from 'axios'

const API_BASE_URL = 'https://example.com/api'

export async function fetchDiceRolls() {
  return axios.get(`${API_BASE_URL}/roll-dice`)
}

export const fetchDiceRollsMock = async (
  n: number
): Promise<{
  data: number[]
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
