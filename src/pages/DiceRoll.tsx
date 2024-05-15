import React from 'react'
import { signal } from '@preact/signals-react'
import Dice from '@/components/Dice'

import { Button, Stack } from '@mui/material'
import { DiceRoll as DiceRollType } from '@/signals'
import { useFetchDiceRolls } from '@/hooks/queries'
import Scores from '@/components/Scores'

const roll = signal<DiceRollType>([])
const rolling = signal(false)
const easeIn = signal(true)

// TODO fetch scores only on page load if user is logged in
// add new score on state (score are saved on call for logged in users)
// implement infinite query or query only last 100 scores?

const DiceRoll: React.FC = () => {
  const numberOfDices = 6

  const { data, isFetching, isError, refetch } =
    useFetchDiceRolls(numberOfDices)

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
    }, 3000)
    refetch()
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
          disabled={isFetching}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
        {isError && <div>Unknown error</div>}

        <div>
          <h2>Dice Rolls:</h2>
          <Stack
            direction={'row'}
            spacing={3}
          >
            {isRolling ? (
              <>
                {roll.value?.map((dice, index) => (
                  <Dice
                    key={index}
                    face={dice || 1}
                    easeIn={easeIn.value}
                  />
                ))}
              </>
            ) : (
              <>
                {data &&
                  data.map((value, index) => (
                    <Dice
                      face={value}
                      key={index}
                      easeIn={easeIn.value}
                    />
                  ))}
              </>
            )}
          </Stack>
        </div>
      </Stack>
      <Scores />
    </div>
  )
}

export default DiceRoll
