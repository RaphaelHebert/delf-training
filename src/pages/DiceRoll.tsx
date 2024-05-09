import React from 'react'
import { useSignals } from '@preact/signals-react/runtime'
import { signal } from '@preact/signals-react'
import Dice from '@/components/Dice'

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Paper,
  Button,
  Stack,
} from '@mui/material'
import LoginButton from '@/components/LoginButton'
import { diceScores } from '@/signals'

import { useFetchDiceRolls } from '../services/queries'

const roll = signal<number[]>([])
const rolling = signal(false)
const easeIn = signal(true)

// TODO fetch scores only on page load if user is logged in
// add new score on state (score are saved on call for logged in users)
// implement infinite query or query only last 100 scores?

const DiceRoll: React.FC = () => {
  useSignals()
  const numberOfDices = 6

  const { data, isFetching, isError, refetch } =
    useFetchDiceRolls(numberOfDices)

  const handleRollDice = () => {
    rolling.value = true
    const dices = setInterval(() => {
      const newDices = []
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
          onClick={() => {
            handleRollDice()
          }}
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
                {roll.value.map((dice, index) => (
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
      <Stack style={{ minWidth: '25%', padding: '16px', marginLeft: '20px' }}>
        <Typography
          variant='h5'
          gutterBottom
        >
          Last Dice Scores
        </Typography>
        <Paper elevation={3}>
          <List>
            {diceScores.value &&
              Object.entries(diceScores.value).length > 0 &&
              Object.entries(diceScores.value).map(([key, value], index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={`${key}: ${value.map((val) => val)}`}
                    />
                  </ListItem>
                  {index < Object.keys(diceScores).length - 1 && <Divider />}
                </React.Fragment>
              ))}
          </List>
          <LoginButton />
        </Paper>
      </Stack>
    </div>
  )
}

export default DiceRoll
