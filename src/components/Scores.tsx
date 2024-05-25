import React from 'react'

import {
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import { useQuery } from 'react-query'

import { scores } from '@/api'
import { diceScores, isLoggedIn, isScoreFetched } from '@/signals'

// TODO implement infinite query or query only last 100 scores?

const Scores: React.FC = () => {
  console.log(isLoggedIn.value)
  console.log(isLoggedIn.value)
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: 'fetchingScores',
    queryFn: scores,
    enabled: isLoggedIn.value && !isScoreFetched.value,
  })

  if (isSuccess && !isScoreFetched.value && isLoggedIn.value) {
    diceScores.value = data
    isScoreFetched.value = true
    console.log({ data })
    console.log(diceScores.value)
  }

  return (
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
        {isFetching ? (
          <p>Fetching...</p>
        ) : (
          <List>
            {diceScores.value &&
              diceScores.value.length > 0 &&
              diceScores.value.map((value, index) => (
                <React.Fragment key={value.uid}>
                  <ListItem>
                    <ListItemText primary={value.score} />
                  </ListItem>
                  {index < diceScores.value.length - 1 && <Divider />}
                </React.Fragment>
              ))}
          </List>
        )}
      </Paper>
    </Stack>
  )
}

export default Scores
