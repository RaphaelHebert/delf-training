import React, { useState } from 'react'
import { Results } from '@/components'
import { ExerciseCard, SideBar, BodyContainer } from '@/components'
import { Flex } from '@radix-ui/themes'
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
      setCount(level.questions.length)
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
              size={100}
            />
          </div>
        </div>
      </SideBar>
      <Flex
        direction='column'
        width='100%'
        justify='center'
        align='center'
        flexGrow='1'
        m='auto'
      >
        {level.questions[count] ? (
          <ExerciseCard
            qcm={{
              ...level.questions[count],
              answers: level.questions[count].answers,
            }}
            sendSummary={handleQuestionSubmission}
            count={count}
            isExamMode={false}
          />
        ) : (
          `You answer all ${level.questions.length} questions! Retry, try next level or come back later, we constantly add new questions!`
        )}
      </Flex>
    </BodyContainer>
  )
}

export default Training
