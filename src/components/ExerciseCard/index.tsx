import React, { useEffect, useActionState } from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import {
  EXAM_QUESTION,
  COLOR_CORRECT,
  COLOR_ERROR,
  COLOR_SUCCESS,
  COLOR_FAIL,
} from '@/constants'
import { ButtonVariantType } from '@/types'
import { qcm } from '@/data'
import './styles.css'

type Props = {
  qcm: qcm
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

  const [selectedValue, setSelectedValue] = React.useState('')

  const [data, formAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      if (previousState || isExamMode) {
        sendSummary(data === correct, isExamMode && count === EXAM_QUESTION)
        setSelectedValue('')
        return null
      }
      return formData.get('selectedValue')
    },
    null // initial state
  )

  useEffect(() => {
    setSelectedValue('')
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
    if (!data) {
      return answer === selectedValue ? COLOR_SUCCESS : COLOR_FAIL
    }

    return correct !== answer ? COLOR_ERROR : COLOR_CORRECT
  }

  const defineVariant = (answer: string): ButtonVariantType => {
    if (!data) {
      return answer === selectedValue ? 'surface' : 'outline'
    }
    return 'soft'
  }

  return (
    <form
      action={formAction}
      style={{ display: 'flex', flexGrow: 1 }}
    >
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
            {data && data !== correct && (
              <Cross2Icon
                color={COLOR_ERROR}
                width='30'
                height='30'
                data-testid='cross-icon'
              />
            )}

            {data && selectedValue === correct && (
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
              {selectedValue ? fullAnswer(question, selectedValue) : question}
            </Text>
          </Flex>
        </Flex>
        <Flex
          width='100%'
          align='stretch'
          direction='column'
          flexGrow='1'
          justify='center'
        >
          <input
            type='hidden'
            name='selectedValue'
            value={selectedValue}
          />
          {answers.map((answer) => (
            <Button
              type='button'
              key={answer}
              my='1'
              mx='4'
              size='3'
              onClick={() => setSelectedValue(answer)}
              variant={defineVariant(answer)}
              color={defineColor(answer)}
              className={`flexibleButton ${data ? 'noHover' : 'simple'}`}
            >
              {answer}
            </Button>
          ))}
        </Flex>
        <Button
          autoFocus
          mx='7'
          my='5'
          size='4'
          loading={isPending}
        >
          {data || isExamMode ? 'Next' : 'Check'}
        </Button>
      </Flex>
    </form>
  )
}

export default ExerciseCard
