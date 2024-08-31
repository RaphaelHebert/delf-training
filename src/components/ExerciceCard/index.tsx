import { Button, Flex, RadioGroup } from '@radix-ui/themes'
import React, { useState } from 'react'

type Props = {
  title: string
  instructions: string
  qcm: {
    question: string
    answers: string[]
    correct: string
  }
}
const ExerciceCard: React.FC<Props> = ({ title, qcm, instructions }) => {
  const { question, answers, correct } = qcm

  const [selectedOption, setSelectedOption] = useState('')
  const [submittedValue, setSubmittedValue] = useState('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setSubmittedValue(selectedOption)
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
          <RadioGroup.Root
            color='mint'
            name='qcm'
            value={selectedOption}
            onValueChange={setSelectedOption}
          >
            {answers.map((answer) => (
              <RadioGroup.Item
                key={question}
                value={answer}
              >
                {answer}
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
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
            <Button color='mint'> Check </Button>
          </Flex>
        </form>
      </Flex>
      {submittedValue && (
        <p>
          Submitted value:{' '}
          {submittedValue === correct ? 'correct' : `the answer was ${correct}`}
        </p>
      )}
    </Flex>
  )
}

export default ExerciceCard
