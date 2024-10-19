import React, { useState, useEffect } from 'react'
import { ExerciseCard, Results, Dialog, Timer } from '@/components'
import { Flex, Heading } from '@radix-ui/themes'
import { ProgressBar } from '@/primitiveComponents'
import { EXAM_QUESTION, EXAM_TIME } from '@/constants'
import { useModeAndLevel } from '@/contexts/modeAndLevel'

const Home: React.FC = () => {
  const {
    modeAndLevel: { level },
  } = useModeAndLevel()
  const [count, setCount] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)
  const [isTimeOut, setIsTimeOut] = useState(false)

  const resetCounts = () => {
    setCount(0)
    setCountGoodAnswer(0)
  }

  useEffect(() => {
    setIsDialogOpen(true)
  }, [])

  const handleQuestionSubmission = (
    isGoodAnswer?: boolean,
    done?: boolean
  ): void => {
    if (isGoodAnswer) {
      setCountGoodAnswer((prev) => prev + 1)
    }
    if (done) {
      setCount(level.questions.length)
    } else {
      setCount((prev) => prev + 1)
    }
  }

  const startExamMode = () => {
    setIsDialogOpen(false)
  }

  const confirmTimeOutModal = () => {
    setIsDialogOpen(false)
    setIsTimeOut(false)
    setCount(EXAM_QUESTION)
  }

  const timeOut = () => {
    setIsTimeOut(true)
  }

  return (
    <Flex
      gap='3'
      flexGrow='1'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
      className='mukta-regular'
    >
      <Dialog
        isOpen={isDialogOpen || isTimeOut}
        actionOnConfirm={isTimeOut ? confirmTimeOutModal : startExamMode}
        showCancel={!isTimeOut}
        title='Exam mode!'
        buttonMessage={isTimeOut ? 'ok' : 'Start!'}
        body={
          isTimeOut ? (
            "You've reached the time limit!"
          ) : (
            <>
              <p>{`You will have ${EXAM_TIME / 60} minutes to complete ${EXAM_QUESTION} questions.`}</p>
              <p> Are you ready?</p>
            </>
          )
        }
      />

      <>
        <Flex
          justify='start'
          pr='9'
          pl='2'
        >
          {count !== level.questions.length && count !== EXAM_QUESTION ? (
            <>
              <Flex
                gap='3'
                width='25%'
                justify='start'
                align='center'
                direction='column'
                style={{
                  borderRight: '1px solid lightGrey',
                }}
              >
                <Heading
                  as='h2'
                  size='6'
                  mt='6'
                >
                  Level: {level.name}
                </Heading>
                {!isDialogOpen && count !== EXAM_QUESTION && (
                  <Timer
                    time={EXAM_TIME}
                    actionOnTimeElapsed={timeOut}
                  />
                )}
              </Flex>

              <Flex
                justify='center'
                width='100%'
                pt='6'
              >
                <Flex
                  direction='column'
                  width='80%'
                  justify='start'
                  flexGrow='1'
                >
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute',
                        margin: '5% auto',
                        width: '100% ',
                      }}
                    >
                      {' '}
                      <ProgressBar
                        total={EXAM_QUESTION}
                        progress={count}
                        numeric={true}
                      />
                    </div>

                    <div style={{ visibility: 'hidden' }}>
                      <Results
                        percent={Math.trunc(
                          count === 0 ? 0 : (countGoodAnswer / count) * 100
                        )}
                        speed={1}
                        size={100}
                      />
                    </div>
                  </div>
                  {level.questions[count] ? (
                    <ExerciseCard
                      qcm={{
                        ...level.questions[count],
                        answers: level.questions[count].answers,
                      }}
                      instructions='Choisissez la bonne réponse:'
                      sendSummary={handleQuestionSubmission}
                      count={count}
                      isExamMode
                    />
                  ) : (
                    `You answer all ${level.questions.length} questions! Retry, try next level or come back later, we constantly add new questions!`
                  )}
                </Flex>
              </Flex>
            </>
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
