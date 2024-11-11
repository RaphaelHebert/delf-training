import { useEffect, useState } from 'react'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  QuestionMarkIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons'
import { slate } from '@radix-ui/colors'
import { Flex, Text } from '@radix-ui/themes'

import { text } from '@/data/types'
import { ExerciseCard, ResponsiveCard } from '@/components'

import '../../pages/Training/styles.css'

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

const buttonStyle = {
  border: '1px dotted green',
  borderRadius: '18px',
  background: slate.slate2,
} as React.CSSProperties

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
            style={buttonStyle}
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
              style={{
                position: 'relative',
                right: '10px',
              }}
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
            style={buttonStyle}
            onClick={() => setText(false)}
          >
            <QuestionMarkIcon
              color={'var(--green-9)'}
              width='25'
              height='25'
              data-testid='check-icon'
              style={{
                position: 'relative',
                left: '10px',
              }}
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
