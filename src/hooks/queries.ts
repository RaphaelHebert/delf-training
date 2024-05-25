import { useQuery } from 'react-query'
import { authToken } from '@/signals'
import { fetchDiceRollsMock, fetchDiceRolls } from '@/api/dice'

function useFetchDiceRolls(n: number) {
  // if user is not logged in use location function otherwise call backend
  return useQuery({
    queryKey: 'diceRolls',
    queryFn: async () => {
      const response = authToken.value
        ? await fetchDiceRolls(n)
        : await fetchDiceRollsMock(n)
      return response.data
    },
    enabled: false,
    refetchOnMount: false,
  })
}

export default useFetchDiceRolls
