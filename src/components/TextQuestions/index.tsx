import { useState, useEffect } from 'react'
import { TextQuestion, FinishScreen } from '@/components'
import { useModeAndLevel } from '@/contexts/modeAndLevel'

const TextQuestions: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0)

  const {
    modeAndLevel: { level },
  } = useModeAndLevel()

  const playAgain = () => {
    setQuestionNumber(0)
  }

  useEffect(() => {
    playAgain()
  }, [level])

  const nextQuestion = () => {
    setQuestionNumber((prev) => prev + 1)
  }

  return questionNumber < level.questions.text.length ? (
    <TextQuestion
      exercice={level.questions.text[questionNumber]}
      nextQuestion={nextQuestion}
    />
  ) : (
    <FinishScreen actionOnRetry={playAgain} />
  )
}

export default TextQuestions
