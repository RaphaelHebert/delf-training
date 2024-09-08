import React, { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'

import './styles.css'

type Props = {
  percent: number
}

const updatePercentDisplay = (percent: number): void => {
  // Set CSS variable
  document.documentElement.style.setProperty('--angle', `${percent * 3.6}deg`)
}

const Results: React.FC<Props> = ({ percent }) => {
  const [classNameAnimation, setClassNameAnimation] = useState('resultPercent')
  const [percentAnimation, setPercentAnimation] = useState(0)

  useEffect(() => {
    updatePercentDisplay(percent)
    setClassNameAnimation('resultPercent resultPercentAnimation')
  }, [percent])

  useEffect(() => {
    if (percentAnimation !== percent) {
      setTimeout(
        () => {
          setPercentAnimation((prev) => prev + 1)
        },
        Math.trunc(4000 / percent)
      )
    }
  }, [percentAnimation])

  return (
    <Flex
      direction='column'
      justify='center'
      align='stretch'
      width='100%'
    >
      <div className='resultPercentBackground'>
        <div className={classNameAnimation}>
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
    </Flex>
  )
}

export default Results