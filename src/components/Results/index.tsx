import React, { useEffect, useState } from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'

import './styles.css'

type Props = {
  percent: number
  speed: number // animation time in seconds
  size?: number //the size in px
  goBack?: () => void
}

const updatePercentDisplay = (percent: number): void => {
  // Set CSS variable
  document.documentElement.style.setProperty('--angle', `${percent * 3.6}deg`)
}

const updateAnimationSpeed = (speed: number): void => {
  document.documentElement.style.setProperty('--speed', `${speed}s`)
}

const updateSize = (size: number): void => {
  document.documentElement.style.setProperty('--size', `${size}px`)
}

const Results: React.FC<Props> = ({
  percent,
  goBack,
  speed = 3000,
  size = 400,
}) => {
  const [classNameAnimation, setClassNameAnimation] = useState('resultPercent')
  const [percentAnimation, setPercentAnimation] = useState(0)

  useEffect(() => {
    updatePercentDisplay(percent)
    updateAnimationSpeed(speed)
    updateSize(size)
    setClassNameAnimation('resultPercent resultPercentAnimation')
  }, [percent, speed, size])

  useEffect(() => {
    if (percentAnimation !== percent) {
      if (percentAnimation < percent) {
        setTimeout(
          () => {
            setPercentAnimation((prev) => prev + 1)
          },
          Math.trunc((speed * 1000 - 500) / percent)
        )
      } else {
        setTimeout(
          () => {
            setPercentAnimation((prev) => prev - 1)
          },
          Math.trunc((speed * 1000 - 500) / (percentAnimation - percent))
        )
      }
    }
  }, [percentAnimation, percent])

  return (
    <Flex
      direction='column'
      justify='start'
      align='stretch'
      width='100%'
      className='setSize'
    >
      <div className='resultPercentBackground'>
        <div
          className={classNameAnimation}
          data-testid='animated-result'
        >
          <div className='resultPercentCenter'>
            <Text
              className='resultPercentText'
              align='center'
            >
              {percentAnimation} %
            </Text>
          </div>
        </div>
      </div>
      {goBack && (
        <Button
          type='button'
          onClick={goBack}
          mx='9'
          size='4'
          className='backButton'
        >
          Retry
        </Button>
      )}
    </Flex>
  )
}

export default Results
