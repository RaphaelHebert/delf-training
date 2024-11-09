import { Button, Flex, Text } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import {
  EXAM_QUESTION,
  COLOR_CORRECT,
  COLOR_ERROR,
  COLOR_SUCCESS,
  COLOR_FAIL,
} from '@/constants'
import './styles.css'

// TODO extract type from Radix
type Variant =
  | 'surface'
  | 'classic'
  | 'solid'
  | 'soft'
  | 'outline'
  | 'ghost'
  | undefined

type Props = {
  qcm: {
    question: string
    answers: string[]
    correct: string
  }
  sendSummary?: (isCorrect?: boolean, done?: boolean) => void
  count?: number
  isExamMode?: boolean
}

const ExerciseCard: React.FC<Props> = ({
  qcm,
  sendSummary = () => {},
  count = 1,
  isExamMode = false,
}) => {
  const { question, answers, correct } = qcm

  const [selectedOption, setSelectedOption] = useState('')
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false)

  const isMobileScreen = window.innerWidth <= 768

  const handleSubmit = () => {
    if (hasFormBeenSubmitted || isExamMode) {
      setHasFormBeenSubmitted(false)
      setSelectedOption('')
      sendSummary(
        selectedOption === correct,
        isExamMode && count === EXAM_QUESTION
      )
      return
    }
    setHasFormBeenSubmitted(true)
  }

  useEffect(() => {
    setHasFormBeenSubmitted(false)
    setSelectedOption('')
  }, [isExamMode])

  const fullAnswer = (question: string, answer: string): string => {
    const splitQuestion = question.split('_____')
    const splitAnswer = answer.split(' ')
    if (splitQuestion.length > 2) {
      return (
        splitAnswer
          .map((part, index) => `${splitQuestion[index]} ${part}`)
          .join(' ') + splitQuestion.at(-1)
      )
    }
    return question.replace('_____', answer)
  }

  const defineColor = (answer: string) => {
    // TODO find types for radix colors
    if (!hasFormBeenSubmitted) {
      return answer === selectedOption ? COLOR_SUCCESS : COLOR_FAIL
    }

    return answer !== correct ? COLOR_ERROR : COLOR_CORRECT
  }

  const defineVariant = (answer: string): Variant => {
    if (!hasFormBeenSubmitted) {
      return answer === selectedOption ? 'surface' : 'outline'
    }
    return 'soft'
  }

  const isLongAnswer = answers.some((answer) => answer.length > 37)

  return (
    <Flex
      direction='column'
      justify='between'
      flexGrow='1'
      width='100%'
    >
      <Flex
        direction='column'
        justify='center'
        flexGrow='1'
      >
        <Flex
          align='center'
          justify='center'
        >
          {hasFormBeenSubmitted && selectedOption !== correct && (
            <Cross2Icon
              color={COLOR_ERROR}
              width='30'
              height='30'
              data-testid='cross-icon'
            />
          )}
          {hasFormBeenSubmitted && selectedOption === correct && (
            <CheckIcon
              color={COLOR_CORRECT}
              width='30'
              height='30'
              data-testid='check-icon'
            />
          )}
          <Text
            as='div'
            align='center'
            wrap='pretty'
          >
            {selectedOption ? fullAnswer(question, selectedOption) : question}
          </Text>
        </Flex>
      </Flex>
      {/* </Flex> */}
      <Flex
        width='100%'
        align='stretch'
        direction='column'
        flexGrow='1'
        justify='center'
      >
        {answers.map((answer) => (
          <Button
            key={answer}
            my={isLongAnswer && isMobileScreen ? '1' : '2'}
            size='3'
            mx='4'
            onClick={() => setSelectedOption(answer)}
            type='button'
            variant={defineVariant(answer)}
            color={defineColor(answer)}
            className={`flexibleButton ${hasFormBeenSubmitted ? 'noHover' : 'simple'}`}
          >
            {answer}
          </Button>
        ))}
      </Flex>
      <Button
        type='button'
        onClick={handleSubmit}
        autoFocus
        size='4'
        mx='7'
        mb='5'
        mt='5'
      >
        {hasFormBeenSubmitted || isExamMode ? 'Next' : 'Check'}
      </Button>
    </Flex>
  )
}

export default ExerciseCard
