import React, { useState } from 'react'
import { Header, ExerciseCard } from '@/components'
import { Flex } from '@radix-ui/themes'
import { a1 } from '@/data/questionsA1'
import shuffle from '@/utils/shuffle-array'

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)

  const handleQuestionSubmission = (isGoodAnswer?: boolean): void => {
    setCount((prev) => prev + 1)
    if (isGoodAnswer) {
      setCountGoodAnswer((prev) => prev + 1)
    }
  }

  // shuffle the questions
  shuffle(a1)

  return (
    <Flex
      gap='3'
      minHeight='100vh'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
    >
      <Header />
      {count}
      {count !== a1.length ? (
        <ExerciseCard
          title='Level: A1'
          qcm={a1[count]}
          instructions='Choisissez la bonne reponse:'
          sendSummary={handleQuestionSubmission}
        />
      ) : (
        <div>{`Your score is ${countGoodAnswer} / ${count} `}</div>
      )}
    </Flex>
  )
}

export default Home
