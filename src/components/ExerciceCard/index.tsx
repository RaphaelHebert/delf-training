import { Button, Flex, Text, Heading, Card, Container } from '@radix-ui/themes'
import React, { useState } from 'react'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

import './styles.css'

const COLOR_CORRECT = 'green'
const COLOR_ERROR = 'red'
const COLOR_SUCCESS = 'mint'
const COLOR_FAIL = 'gray'

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
  title: string
  instructions: string
  qcm: {
    question: string
    answers: string[]
    correct: string
  }
  sendSummary?: (isCorrect?: boolean) => void
}

const ExerciseCard: React.FC<Props> = ({
  title,
  qcm,
  instructions,
  sendSummary = () => {},
}) => {
  const { question, answers, correct } = qcm

  const [selectedOption, setSelectedOption] = useState('')
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false)

  const handleSubmit = () => {
    if (hasFormBeenSubmitted) {
      setHasFormBeenSubmitted(false)
      setSelectedOption('')
      sendSummary(selectedOption === correct)
      return
    }
    setHasFormBeenSubmitted(true)
  }

  const defineColor = (answer: string) => {
    // TODO find types for radix colors
    if (!hasFormBeenSubmitted) {
      return answer === selectedOption ? COLOR_SUCCESS : COLOR_FAIL
    }

    return hasFormBeenSubmitted && answer !== correct
      ? COLOR_ERROR
      : COLOR_CORRECT
  }

  const defineVariant = (answer: string): Variant => {
    if (!hasFormBeenSubmitted) {
      return answer === selectedOption ? 'surface' : 'outline'
    }
    return 'soft'
  }

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
    >
      <Heading
        as='h2'
        size='6'
        mb='6'
      >
        {title}
      </Heading>
      <Container>
        <Card>
          <Heading
            as='h3'
            size='4'
            mb='5'
            mx='6'
          >
            {instructions}
          </Heading>{' '}
          <Flex
            mb='6'
            justify='center'
            wrap={'nowrap'}
            align='center'
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
              wrap={'nowrap'}
              as='div'
              ml='3'
            >
              {selectedOption
                ? question.replace('_____', selectedOption)
                : question}
            </Text>
          </Flex>
          <Flex
            width='100%'
            justify='start'
            align='stretch'
            direction='column'
          >
            {answers.map((answer) => (
              <Button
                key={answer}
                my='2'
                mx='8'
                size='3'
                //className={answerClass()}
                onClick={() => setSelectedOption(answer)}
                id={answer}
                variant={defineVariant(answer)}
                color={defineColor(answer)}
                className={hasFormBeenSubmitted ? 'noHover' : ''}
              >
                {answer}
              </Button>
            ))}
          </Flex>
        </Card>
        <Flex
          direction='column'
          align='stretch'
          width='100%'
          py='6'
        >
          <Button
            color='gray'
            type='button'
            onClick={handleSubmit}
          >
            {hasFormBeenSubmitted ? 'Next' : 'Check'}
          </Button>
        </Flex>
      </Container>
    </Flex>
  )
}

export default ExerciseCard
