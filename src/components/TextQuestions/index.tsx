import { useState } from 'react'
import { TextQuestion, FinishScreen } from '@/components'
import { useModeAndLevel } from '@/contexts/modeAndLevel'

const TextQuestions: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0)

  const {
    modeAndLevel: { level },
  } = useModeAndLevel()

  const allQuestion = questionNumber < level.questions.text.length
  const nextQuestion = () => {
    setQuestionNumber((prev) => prev + 1)
  }

  const playAgain = () => {
    setQuestionNumber(0)
  }

  return allQuestion ? (
    <TextQuestion
      exercice={level.questions.text[questionNumber]}
      nextQuestion={nextQuestion}
    />
  ) : (
    <FinishScreen actionOnRetry={playAgain} />
  )
}

export default TextQuestions
