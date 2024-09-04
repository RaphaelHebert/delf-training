import { Button, Flex, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'

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
  title: string
  instructions: string
  qcm: {
    question: string
    answers: string[]
    correct: string
  }
  sendSummary?: (isCorrect?: boolean) => void
}
const ExerciceCard: React.FC<Props> = ({
  title,
  qcm,
  instructions,
  sendSummary = () => {},
}) => {
  const { question, answers, correct } = qcm

  const [selectedOption, setSelectedOption] = useState('')
  const [hasFormBeenSubmited, setHasFormBeenSubmited] = useState(false)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (hasFormBeenSubmited) {
      setHasFormBeenSubmited(false)
      setSelectedOption('')
      sendSummary(selectedOption === correct)
      return
    }
    setHasFormBeenSubmited(true)
  }

  const defineColor = (answer: string) => {
    // TODO find types for radix colors
    if (!hasFormBeenSubmited) {
      return answer === selectedOption ? 'mint' : 'gray'
    }

    return hasFormBeenSubmited && answer !== correct ? 'red' : 'green'
  }

  const defineVariant = (answer: string): Variant => {
    if (!hasFormBeenSubmited) {
      return answer === selectedOption ? 'surface' : 'outline'
    }
    return 'surface'
  }
  //   const defineClassName = (answer: string) => {
  //     // TODO find types for radix colors
  //     if (!hasFormBeenSubmited) return ''
  //     return hasFormBeenSubmited && answer !== correct
  //       ? 'wrongAnswer'
  //       : 'goodAnswer'
  //   }

  //   const answerClass = (): string => {
  //     return 'defaultAnswer'
  //   }

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      px='35%'
      height='1000px'
    >
      <h2>{title}</h2>

      <h3>{instructions}</h3>

      <Text
        mb='5'
        className={'questionClass'}
      >
        <Flex align={'center'}>
          {hasFormBeenSubmited && (
            <span>
              {selectedOption === correct ? (
                <CheckIcon
                  color='green'
                  width='30'
                  height='30'
                />
              ) : (
                <Cross2Icon
                  color='red'
                  width='30'
                  height='30'
                />
              )}
            </span>
          )}
          <span>
            {selectedOption
              ? question.replace('_____', selectedOption)
              : question}
          </span>
        </Flex>
      </Text>
      <Flex
        width='100%'
        justify='start'
        align='center'
        direction='column'
      >
        {answers.map((answer) => (
          <Button
            key={answer}
            my='2'
            //className={answerClass()}
            onClick={() => setSelectedOption(answer)}
            id={answer}
            variant={defineVariant(answer)}
            color={defineColor(answer)}
            className={hasFormBeenSubmited ? 'noHover' : 'answerButton'}
          >
            {answer}
          </Button>
        ))}
        <Flex
          direction='row'
          justify={'between'}
          width='100%'
          py='6'
        >
          <Button
            type='button'
            color='gray'
          >
            {' '}
            Pass{' '}
          </Button>
          <Button
            color='mint'
            onClick={handleSubmit}
          >
            {' '}
            {hasFormBeenSubmited ? 'Next' : 'Check'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ExerciceCard
