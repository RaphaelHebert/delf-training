import { useState, useEffect } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import * as Progress from '@radix-ui/react-progress'

import './styles.css'

type Props = {
  progress: number
  total: number
  numeric: boolean
}
const ProgressDemo: React.FC<Props> = ({ progress, total }) => {
  const [progessState, setProgressState] = useState(
    Math.trunc((progress / total) * 100) > 100
      ? 100
      : Math.trunc((progress / total) * 100)
  )

  useEffect(() => {
    const prog = Math.trunc((progress / total) * 100) - Math.trunc(100 / total)
    if (prog > 0 && prog <= 100) {
      setProgressState(prog)
    }
    const timer = setTimeout(
      () => setProgressState(Math.trunc((progress / total) * 100)),
      100
    )
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <Flex
      justify='center'
      align='center'
    >
      <Progress.Root
        className='ProgressRoot'
        value={progress}
      >
        <Progress.Indicator
          className='ProgressIndicator'
          style={{
            transform: `translateX(-${100 - progessState}%)`,
          }}
        />
      </Progress.Root>
      <Text
        ml='4'
        as='span'
      >{`${progress} / ${total}`}</Text>
    </Flex>
  )
}

export default ProgressDemo
