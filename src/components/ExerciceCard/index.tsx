import { Button, Flex, Text, Radio } from '@radix-ui/themes'
import React, { useState } from 'react'
import './styles.css'

type Props = {
  title: string
  instructions: string
  qcm: {
    question: string
    answers: string[]
    correct: string
  }
  sendSummary: () => void
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
      sendSummary()
      return
    }
    setHasFormBeenSubmited(true)
  }

  const defineColor = (answer: string): any => {
    // TODO find types for radix colors
    if (!hasFormBeenSubmited) return 'mint'
    return hasFormBeenSubmited && answer !== correct ? 'red' : 'green'
  }

  const defineClassName = (answer: string): any => {
    // TODO find types for radix colors
    if (!hasFormBeenSubmited) return ''
    return hasFormBeenSubmited && answer !== correct
      ? 'wrongAnswer'
      : 'goodAnswer'
  }

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      px='35%'
    >
      <h2>{title}</h2>

      <h3>{instructions}</h3>
      <p>{question}</p>

      <Flex width='100%'>
        <form onSubmit={handleSubmit}>
          {answers.map((answer) => (
            <Flex
              asChild
              gap='2'
              align='center'
              key={answer}
            >
              <Text
                as='label'
                size='3'
                className={defineClassName(answer)}
              >
                <Radio
                  size='1'
                  name={answer}
                  value={answer}
                  checked={answer === selectedOption}
                  onClick={() => setSelectedOption(answer)}
                  disabled={hasFormBeenSubmited && answer !== selectedOption}
                  color={defineColor(answer)}
                />
                {answer}
              </Text>
            </Flex>
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
            <Button color='mint'>
              {' '}
              {hasFormBeenSubmited ? 'Next' : 'Check'}
            </Button>
          </Flex>
        </form>
      </Flex>
      {hasFormBeenSubmited && (
        <p>
          {selectedOption === correct
            ? 'Correct !'
            : `La bonne reponse est ${correct}`}
        </p>
      )}
    </Flex>
  )
}

export default ExerciceCard
