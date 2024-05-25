import React, { useEffect } from 'react'
import { Button, Stack, Alert } from '@mui/material'
import { signal } from '@preact/signals-react'

import { DiceRoll as DiceRollType } from '@/type'
import { Scores, Dice } from '@/components'
import { useFetchDiceRolls } from '@/hooks'
import { diceScores } from '@/signals'

const roll = signal<DiceRollType>([])
const rolling = signal(false)
const easeIn = signal(true)

// TODO fetch scores only on page load if user is logged in
// add new score on state (score are saved on call for logged in users)
// implement infinite query or query only last 100 scores?

const DiceRoll: React.FC = () => {
  const numberOfDices = 6

  const {
    data: score,
    isFetching,
    isError,
    isSuccess,
    refetch,
    error,
  } = useFetchDiceRolls(numberOfDices)

  useEffect(() => {
    if (isSuccess) {
      const values = diceScores.value
      diceScores.value =
        isSuccess && values.length ? [...values, score] : [score]
    }
  }, [isSuccess, score])

  const handleRollDice = () => {
    rolling.value = true
    const dices = setInterval(() => {
      const newDices: DiceRollType = []
      for (let x = 0; x < numberOfDices; x++) {
        newDices.push(Math.ceil(Math.random() * 6))
      }
      roll.value = newDices
    }, 500)
    const easing = setInterval(() => {
      easeIn.value = !easeIn.value
    }, 250)
    setTimeout(() => {
      clearInterval(dices)
      clearInterval(easing)
      rolling.value = false
      refetch()
    }, 3000)
  }

  const isRolling = isFetching || rolling.value

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
      }}
    >
      <Stack sx={{ flex: 1 }}>
        <h1>Dice Roller</h1>
        <Button
          type='button'
          onClick={handleRollDice}
          variant='contained'
          color='secondary'
          disabled={isRolling}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
        <div>
          <h2>Dice Rolls:</h2>
          <Stack
            direction={'row'}
            spacing={3}
          >
            {isRolling && (
              <>
                {roll.value?.map((dice, index) => (
                  <Dice
                    key={index}
                    face={dice || 1}
                    easeIn={easeIn.value}
                  />
                ))}
              </>
            )}
            {!isRolling && isSuccess && (
              <>
                {score &&
                  score.score.map((value, index) => (
                    <Dice
                      face={value}
                      key={index}
                      easeIn={easeIn.value}
                    />
                  ))}
              </>
            )}
            {!isRolling && isError && (
              <Alert severity='error'>{`An error occurred: ${error}`}</Alert>
            )}
          </Stack>
        </div>
      </Stack>
      <Scores />
    </div>
  )
}

export default DiceRoll
