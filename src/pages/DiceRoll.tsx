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

const roll = signal({ one: 1, two: 1, three: 1 })
const rolling = signal(false)
const easeIn = signal(true)

// TODO fetch scores only on page load if user is logged in
// add new score on state (score are saved on call for logged in users)
// implement infinite query or query only last 100 scores?

const DiceRoll: React.FC = () => {
  useSignals()

  const { data, isFetching, isError, refetch } = useFetchDiceRolls()

  const handleRollDice = () => {
    rolling.value = true
    const dices = setInterval(() => {
      roll.value = {
        one: Math.ceil(Math.random() * 6),
        two: Math.ceil(Math.random() * 6),
        three: Math.ceil(Math.random() * 6),
      }
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
                <Dice
                  face={roll?.value.one || 1}
                  easeIn={easeIn.value}
                />
                <Dice
                  face={roll?.value.two || 1}
                  easeIn={easeIn.value}
                />
                <Dice
                  face={roll?.value.three || 1}
                  easeIn={easeIn.value}
                />
              </>
            ) : (
              <>
                {data &&
                  Object.entries(data).map(([key, value]) => (
                    <Dice
                      face={value}
                      key={key}
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
