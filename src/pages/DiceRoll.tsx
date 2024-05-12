import React from 'react'
import { signal } from '@preact/signals-react'
import Dice from '@/components/Dice'
import { formatDate } from '@/services/date'

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
import { diceScores, DiceRoll as DiceRollType } from '@/signals'
import { useFetchDiceRolls } from '@/hooks/queries'

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
      <Stack
        style={{
          minWidth: '25%',
          padding: '16px',
          marginLeft: '20px',
          height: '90vh',
        }}
      >
        <Typography
          variant='h5'
          gutterBottom
        >
          Last Dice Scores
        </Typography>
        <Paper
          elevation={3}
          sx={{ height: '80vh' }}
        >
          <List>
            {diceScores.value &&
              Object.entries(diceScores.value).length > 0 &&
              Object.entries(diceScores.value).map(([num, value], index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={`${formatDate(parseInt(num))}: ${value}`}
                    />
                  </ListItem>
                  {index < Object.keys(diceScores.value).length - 1 && (
                    <Divider />
                  )}
                </React.Fragment>
              ))}
          </List>
        </Paper>
      </Stack>
    </div>
  )
}

export default DiceRoll
