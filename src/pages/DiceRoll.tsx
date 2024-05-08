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

const roll = signal(1)
const rolling = signal(false)

const DiceRoll: React.FC = () => {
  useSignals()

  const { data, isFetching, isError, refetch } = useFetchDiceRolls()

  const handleRollDice = () => {
    rolling.value = true
    const dices = setInterval(() => {
      roll.value = Math.ceil(Math.random() * 6)
    }, 500)
    setTimeout(() => {
      clearInterval(dices)
      rolling.value = false
    }, 3000)
    refetch()
  }

  const isRolling = isFetching || rolling.value
  const derivedFaceOne = roll?.value
    ? Math.ceil(((roll.value % 6) + (6 - roll.value)) * Math.random())
    : 1
  const derivedFaceTwo = roll?.value
    ? Math.ceil(((roll.value % 6) + (6 - roll.value)) * Math.random())
    : 1
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
                <Dice face={roll?.value || 1} />
                <Dice face={derivedFaceOne} />
                <Dice face={derivedFaceTwo} />
              </>
            ) : (
              <>
                {data &&
                  Object.entries(data).map(([key, value]) => (
                    <Dice
                      face={value}
                      key={key}
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
                      primary={`${key}: ${value?.roll1}, ${value?.roll2}, ${value?.roll3}`}
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
