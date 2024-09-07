import React, { useState, useEffect } from 'react'
import { Header, ExerciseCard, Results } from '@/components'
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

  useEffect(() => {
    shuffle(a1)
  }, [])

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
      {count !== 0 && `${Math.trunc((countGoodAnswer / count) * 100)} %`}
      {count !== a1.length ? (
        <ExerciseCard
          title='Level: A1'
          qcm={a1[count]}
          instructions='Choisissez la bonne reponse:'
          sendSummary={handleQuestionSubmission}
        />
      ) : (
        <Results percent={Math.trunc((countGoodAnswer / count) * 100)} />
      )}
    </Flex>
  )
}

export default Home
