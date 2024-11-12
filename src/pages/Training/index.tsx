import React, { useState } from 'react'
import { Text } from '@radix-ui/themes'

import {
  ExerciseCard,
  SideBar,
  BodyContainer,
  Results,
  FinishScreen,
  ResponsiveCard,
} from '@/components'
import { useModeAndLevel } from '@/contexts/modeAndLevel'

const Training: React.FC = () => {
  const {
    modeAndLevel: { level },
  } = useModeAndLevel()
  const [count, setCount] = useState(0)
  const [countGoodAnswer, setCountGoodAnswer] = useState(0)

  const handleQuestionSubmission = (
    isGoodAnswer?: boolean,
    done?: boolean
  ): void => {
    if (isGoodAnswer) {
      setCountGoodAnswer((prev) => prev + 1)
    }
    if (done) {
      setCount(level.questions.qcm.length)
    } else {
      setCount((prev) => prev + 1)
    }
  }

  return (
    <BodyContainer>
      <SideBar
        count={count}
        goodAnswers={countGoodAnswer}
      >
        <div style={{ position: 'relative' }}>
          <div>
            <Results
              percent={Math.trunc(
                count === 0 ? 0 : (countGoodAnswer / count) * 100
              )}
              speed={1}
              size={'100px'}
            />
          </div>
        </div>
      </SideBar>
      <ResponsiveCard>
        {level.questions.qcm[count] ? (
          <ExerciseCard
            qcm={{
              ...level.questions.qcm[count],
              answers: level.questions.qcm[count].answers,
            }}
            sendSummary={handleQuestionSubmission}
            count={count}
            isExamMode={false}
          />
        ) : (
          <FinishScreen>
            <Text
              mx='6'
              wrap='pretty'
              align='center'
            >
              You answered all {level.questions.qcm.length} questions! Retry,
              try next level or come back later, we constantly add new
              questions!
            </Text>
          </FinishScreen>
        )}
      </ResponsiveCard>
    </BodyContainer>
  )
}

export default Training
