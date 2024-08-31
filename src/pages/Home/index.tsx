import React, { useState } from 'react'
import { Header, ExerciceCard } from '@/components'
import { Flex } from '@radix-ui/themes'

const Home: React.FC = () => {
  const [count, setCount] = useState(0)

  const handleQuestionSubmission = () => {
    setCount((prev) => prev + 1)
  }

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
      <ExerciceCard
        title='Level 1 debutant'
        qcm={{
          question: 'Ils _____ manger des glaces.',
          answers: ['aiment', 'aime', 'aimes', 'aimer'],
          correct: 'aiment',
        }}
        instructions='Choisissez la bonne reponse:'
        sendSummary={handleQuestionSubmission}
      />
    </Flex>
  )
}

export default Home
