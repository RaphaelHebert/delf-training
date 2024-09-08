import React, { useState, useEffect } from 'react'
import { Header, ExerciseCard, Results } from '@/components'
import { Flex, Heading, Text, Switch } from '@radix-ui/themes'
import { ProgressBar } from '@/primitiveComponents'
import { a1 } from '@/data/questionsA1'
import shuffle from '@/utils/shuffle-array'

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)
  const [isExamMode, setIsExamMode] = useState(false)

  useEffect(() => {
    setCount(0)
    setCountGoodAnswer(0)
    shuffle(a1)
  }, [isExamMode])

  const toggleExamMode = () => {
    setIsExamMode((prev) => !prev)
  }

  const handleQuestionSubmission = (
    isGoodAnswer?: boolean,
    done?: boolean
  ): void => {
    if (isGoodAnswer) {
      setCountGoodAnswer((prev) => prev + 1)
    }
    if (done) {
      setCount(a1.length)
    } else {
      setCount((prev) => prev + 1)
    }
  }

  return (
    <Flex
      gap='3'
      minHeight='100vh'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
    >
      <Header />
      {/* {count !== 0 && `${Math.trunc((countGoodAnswer / count) * 100)} %`} */}
      {count !== a1.length ? (
        <>
          <Flex
            width='100%'
            justify='between'
            align='center'
            px='9'
          >
            <Heading
              as='h2'
              size='6'
            >
              Level: A1
            </Heading>
            <Text
              as='label'
              size='3'
            >
              <Flex gap='2'>
                <Text
                  as='span'
                  title='unlimited questions and answer'
                  color={isExamMode ? 'gray' : 'mint'}
                  style={
                    isExamMode ? { cursor: 'pointer' } : { fontWeight: 700 }
                  }
                >
                  Training mode
                </Text>
                <Switch
                  size='1'
                  checked={isExamMode} // Bind the state to the switch
                  onCheckedChange={toggleExamMode}
                />
                <Text
                  as='span'
                  title='20 questions and final score'
                  color={isExamMode ? 'mint' : 'gray'}
                  style={
                    isExamMode ? { fontWeight: 700 } : { cursor: 'pointer' }
                  }
                >
                  Exam mode
                </Text>
              </Flex>
            </Text>
          </Flex>
          <ExerciseCard
            qcm={{ ...a1[count], answers: shuffle(a1[count].answers) }}
            instructions='Choisissez la bonne reponse:'
            sendSummary={handleQuestionSubmission}
            count={count}
            isExamMode={isExamMode}
          />
          {isExamMode && (
            <ProgressBar
              total={4}
              progress={count}
            />
          )}
        </>
      ) : (
        <Results percent={Math.trunc((countGoodAnswer / 4) * 100)} /> // 4: number of questions for exam mode
      )}
    </Flex>
  )
}

export default Home
