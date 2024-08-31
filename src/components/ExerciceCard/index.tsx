import { Button, Flex, RadioGroup } from '@radix-ui/themes'
import React from 'react'

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

  const manageSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target)
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
      <form onSubmit={manageSubmit}>
        <Flex width='100%'>
          <RadioGroup.Root
            color='mint'
            name='example'
          >
            {answers.map((answer) => (
              <RadioGroup.Item value={answer}>{answer}</RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Flex>

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
  )
}

export default ExerciceCard
