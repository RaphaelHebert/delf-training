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
  useEffect(() => {
    updatePercentDisplay(percent)
    setClassNameAnimation('resultPercent resultPercentAnimation')
  }, [percent])

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
              {percent} %
            </Text>
          </div>
        </div>
      </div>
    </Flex>
  )
}

export default Results
