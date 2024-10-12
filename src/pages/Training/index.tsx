import React, { useState } from 'react'
import { ExerciseCard, Results } from '@/components'
import { Flex, Heading } from '@radix-ui/themes'
import { useModeAndLevel } from '@/contexts/modeAndLevel'
import { slate } from '@radix-ui/colors'

const Training: React.FC = () => {
  const {
    modeAndLevel: { level, mode },
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
      <Flex
        justify='start'
        flexGrow='1'
        pr='9'
        pl='2'
      >
        <Flex
          gap='3'
          width='25%'
          justify='start'
          align='center'
          direction='column'
          style={{
            backgroundColor: slate.slate1,
            borderRight: '1px solid lightGrey',
          }}
        >
          <Heading
            as='h4'
            size='4'
            mt='6'
          >
            {`${count} question${count > 1 ? 's' : ''} done`}
          </Heading>
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
          <Heading
            as='h2'
            size='4'
            mt='6'
          >
            {`Level ${level.name}`}
          </Heading>
          <Heading
            as='h2'
            size='4'
            mt='2'
          >
            {`Mode ${mode}`}
          </Heading>
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
            {level.questions[count] ? (
              <ExerciseCard
                qcm={{
                  ...level.questions[count],
                  answers: level.questions[count].answers,
                }}
                instructions='Choisissez la bonne reponse:'
                sendSummary={handleQuestionSubmission}
                count={count}
                isExamMode={false}
              />
            ) : (
              'no question available'
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Training
