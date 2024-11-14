import React, { useEffect, useState } from 'react'
import { Text } from '@radix-ui/themes'

import './styles.css'

type Props = {
  percent: number
  speed?: number // animation time in seconds
  size?: string //the size in CSS string
}

const updatePercentDisplay = (percent: number): void => {
  // Set CSS variable
  document.documentElement.style.setProperty('--angle', `${percent * 3.6}deg`)
}

const updateAnimationSpeed = (speed: number): void => {
  document.documentElement.style.setProperty('--speed', `${speed}s`)
}

const updateSize = (size: string): void => {
  document.documentElement.style.setProperty('--size', `${size}`)
}

const Results: React.FC<Props> = ({ percent, speed = 3000, size = '30px' }) => {
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
  )
}

export default Results
