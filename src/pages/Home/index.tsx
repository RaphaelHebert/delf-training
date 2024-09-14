import React, { useState } from 'react'
import { Header, ExerciseCard, Results, CustomSwitch } from '@/components'
import { Flex, Heading } from '@radix-ui/themes'
import { ProgressBar, Select } from '@/primitiveComponents'
import { a1 } from '@/data/questionsA1'
import shuffle from '@/utils/shuffle-array'

const EXAM_QUESTION: number = 4

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)
  const [isExamMode, setIsExamMode] = useState(false)

  const resetCounts = () => {
    setCount(0)
    setCountGoodAnswer(0)
    shuffle(a1)
  }
  const toggleExamMode = () => {
    setIsExamMode((prev) => {
      resetCounts()
      return !prev
    })
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

      <>
        <Flex
          justify='start'
          pr='9'
          pl='2'
        >
          <Flex
            gap='3'
            minHeight='100vh'
            width='25%'
            justify='start'
            align='center'
            direction='column'
            style={{
              borderRight: '1px solid lightGrey',
            }}
          >
            <CustomSwitch
              textLeft='Training'
              textRight='Exam'
              toggleSelect={toggleExamMode}
              isSelected={isExamMode}
            />
            <Heading
              as='h2'
              size='6'
              mt='6'
            >
              Level:
            </Heading>
            <Select
              placeholder='Level'
              choice={{ A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2' }}
            />
          </Flex>
          {count !== a1.length ? (
            <Flex
              justify='center'
              width='100%'
              pt='6'
            >
              <Flex
                direction='column'
                width='100%'
                justify='start'
              >
                <div style={!isExamMode ? { visibility: 'hidden' } : {}}>
                  <ProgressBar
                    total={EXAM_QUESTION}
                    progress={count}
                    numeric={true}
                  />
                </div>

                <ExerciseCard
                  qcm={{ ...a1[count], answers: shuffle(a1[count].answers) }}
                  instructions='Choisissez la bonne reponse:'
                  sendSummary={handleQuestionSubmission}
                  count={count}
                  isExamMode={isExamMode}
                />
                {!isExamMode && (
                  <Results
                    percent={Math.trunc(
                      (countGoodAnswer / EXAM_QUESTION) * 100
                    )}
                    speed={1}
                  />
                )}
              </Flex>
            </Flex>
          ) : (
            <>
              <Results
                percent={Math.trunc((countGoodAnswer / EXAM_QUESTION) * 100)}
                goBack={resetCounts}
                speed={3}
              />
            </>
          )}
        </Flex>
      </>
    </Flex>
  )
}

export default Home
