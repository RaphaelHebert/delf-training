import { useEffect, useState } from 'react'
import { Text } from '@radix-ui/themes'

import { text } from '@/data/types'
import { ExerciseCard } from '@/components'

type RenderBodyProps = {
  text: boolean
  exercise: text
  setText: (isText: boolean) => void
  nextQuestion: () => void
}

const Body: React.FC<RenderBodyProps> = ({ text, exercise, nextQuestion }) => {
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(() => {
    setQuestionNumber(0)
  }, [exercise])

  const sendSummary = () => {
    if (exercise.questions.length - 1 === questionNumber) {
      nextQuestion()
    } else {
      setQuestionNumber((prev) => prev + 1)
    }
  }

  return text ? (
    <Text
      as='div'
      align='center'
      wrap='pretty'
      mx='3'
    >
      {exercise.text}
    </Text>
  ) : (
    <ExerciseCard
      qcm={exercise.questions[questionNumber]}
      sendSummary={sendSummary}
    />
  )
}

export default Body
