import { useEffect, useState } from 'react'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  QuestionMarkIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons'
import { Flex, Text } from '@radix-ui/themes'

import { text } from '@/data/types'
import { ExerciseCard, ResponsiveCard } from '@/components'

import './styles.css'

type Props = {
  exercice: text
  nextQuestion: () => void
}

const TextQuestion: React.FC<Props> = ({ exercice, nextQuestion }) => {
  // show text or questions
  const [text, setText] = useState(true)

  useEffect(() => {
    setText(true)
  }, [exercice])

  return (
    <ResponsiveCard
      header={
        <Header
          text={text}
          setText={setText}
        />
      }
    >
      <RenderBody
        text={text}
        exercice={exercice}
        setText={setText}
        nextQuestion={nextQuestion}
      />
    </ResponsiveCard>
  )
}

type HeaderProps = {
  text: boolean
  setText: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ text, setText }) => {
  return (
    <>
      {!text ? (
        <Flex
          width='100%'
          justify='start'
        >
          <Flex
            align='center'
            className='buttonStyle'
            onClick={() => {
              setText(true)
            }}
          >
            <ChevronLeftIcon
              color={'var(--green-9)'}
              width='40'
              height='40'
              data-testid='check-icon'
            />
            <TextAlignJustifyIcon
              color={'var(--green-9)'}
              width='25'
              height='25'
              data-testid='check-icon'
              className='rightButton'
            />
          </Flex>
        </Flex>
      ) : (
        <Flex
          width='100%'
          justify='end'
        >
          <Flex
            align='center'
            className='buttonStyle'
            onClick={() => setText(false)}
          >
            <QuestionMarkIcon
              color={'var(--green-9)'}
              width='25'
              height='25'
              data-testid='check-icon'
              className='leftButton'
            />
            <ChevronRightIcon
              color={'var(--green-9)'}
              width='40'
              height='40'
              data-testid='check-icon'
            />
          </Flex>
        </Flex>
      )}
    </>
  )
}

type RenderBodyProps = {
  text: boolean
  exercice: text
  setText: React.Dispatch<React.SetStateAction<boolean>>
  nextQuestion: () => void
}

const RenderBody: React.FC<RenderBodyProps> = ({
  text,
  exercice,
  nextQuestion,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(() => {
    setQuestionNumber(0)
  }, [exercice])

  const sendSummary = () => {
    if (exercice.questions.length - 1 === questionNumber) {
      nextQuestion()
    } else {
      setQuestionNumber((prev) => prev + 1)
    }
  }

  // if first step render question
  return text ? (
    <Text
      as='div'
      align='center'
      wrap='pretty'
      mx='3'
    >
      {exercice.text}
    </Text>
  ) : (
    <ExerciseCard
      qcm={exercice.questions[questionNumber]}
      sendSummary={sendSummary}
    />
  )

  return
}

export default TextQuestion
