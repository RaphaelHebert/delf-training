import React, { useState, useEffect } from 'react'
import {
  ExerciseCard,
  Results,
  Dialog,
  Timer,
  BodyContainer,
} from '@/components'
import { Flex } from '@radix-ui/themes'
import { ProgressBar } from '@/primitiveComponents'
import { EXAM_QUESTION, EXAM_TIME } from '@/constants'
import { useModeAndLevel } from '@/contexts/modeAndLevel'
import { SideBar } from '@/components'

import '../../components/SideBar/styles.css'
import { shuffle } from '@/utils/shuffle-array'

const Home: React.FC = () => {
  const {
    modeAndLevel: { level },
  } = useModeAndLevel()
  const [count, setCount] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)
  const [isTimeOut, setIsTimeOut] = useState(false)
  const [questions, setQuestions] = useState(shuffle(level.questions))

  const isMobileScreen = window.innerWidth <= 768

  const newQuestions = () => setQuestions(shuffle(level.questions))
  const resetCounts = () => {
    setCount(0)
    setCountGoodAnswer(0)
    newQuestions()
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
      setCount(questions.length)
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

  const displayResults = !(
    count !== questions.length && count !== EXAM_QUESTION
  )
  const displayTimer = !isDialogOpen && count !== EXAM_QUESTION

  const isLongAnswer = questions[count].answers.some(
    (answer) => answer.length > 37
  )
  return (
    <>
      {!displayResults && (
        <BodyContainer>
          <SideBar
            count={count}
            goodAnswers={countGoodAnswer}
          >
            {displayTimer && (
              <Flex justify='center'>
                <Timer
                  time={EXAM_TIME}
                  actionOnTimeElapsed={timeOut}
                />
              </Flex>
            )}
          </SideBar>

          <Flex
            flexGrow='1'
            direction='column'
            m='auto'
            justify='between'
            align='center'
          >
            {displayTimer && (
              <Flex
                width='100%'
                direction={!isLongAnswer ? 'column' : 'row'}
                justify='center'
                gap='4'
                align='center'
              >
                <div className='smallScreen'>
                  <Timer
                    time={EXAM_TIME}
                    actionOnTimeElapsed={timeOut}
                  />
                </div>

                <ProgressBar
                  total={EXAM_QUESTION}
                  progress={count}
                  numeric={true}
                />
              </Flex>
            )}

            <ExerciseCard
              qcm={{
                ...questions[count],
                answers: questions[count].answers,
              }}
              sendSummary={handleQuestionSubmission}
              count={count}
              isExamMode
            />
          </Flex>
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
        </BodyContainer>
      )}
      {displayResults && (
        <Results
          percent={Math.trunc((countGoodAnswer / EXAM_QUESTION) * 100)}
          goBack={resetCounts}
          speed={3}
          size={window.innerWidth / (isMobileScreen ? 1.2 : 3)}
        />
      )}
    </>
  )
}

export default Home
