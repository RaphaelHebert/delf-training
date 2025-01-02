import React, { useActionState } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { EXAM_QUESTION, COLOR_CORRECT, COLOR_ERROR } from '@/constants'
import { qcm } from '@/data'
import { SubmitButton, RadioButtons } from '@/components'

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

  const [data, formAction] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      if (previousState || isExamMode) {
        sendSummary(data === correct, isExamMode && count === EXAM_QUESTION)
        return null
      }
      return formData.get('answer')
    },
    null // initial state
  )

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

  return (
    <form
      action={formAction}
      style={{ display: 'contents' }}
      name='answerForm'
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

            {data && data === correct && (
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
              {data ? fullAnswer(question, data as string) : question}
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
          <RadioButtons
            values={answers}
            name='answer'
            correctedAnswer={data ? correct : null}
          />
        </Flex>
        <SubmitButton
          autoFocus
          mx='7'
          my='5'
          size='4'
        >
          {data || isExamMode ? 'Next' : 'Check'}
        </SubmitButton>
      </Flex>
    </form>
  )
}

export default ExerciseCard
