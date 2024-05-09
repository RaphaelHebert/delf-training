import { useQuery } from 'react-query'
import { diceScores, authToken } from '@/signals'
import { fetchDiceRollsMock, fetchDiceRolls } from './api'

export function useFetchDiceRolls(n: number) {
  // if user is not logged in use location function otherwise call backend
  return useQuery({
    queryKey: 'diceRolls',
    queryFn: async () => {
      const response = authToken.value
        ? await fetchDiceRolls(n)
        : await fetchDiceRollsMock(n)

      diceScores.value = { ...diceScores.value, [Date.now()]: response.data }
      return response.data
    },
    enabled: false,
    refetchOnMount: false,
  })
}
