import { Flex } from '@radix-ui/themes'
import { useState, useEffect } from 'react'
import './styles.css'

type Props = {
  time: number // time in seconds
  actionOnTimeElapsed?: () => void
  style?: React.CSSProperties
}

const Timer: React.FC<Props> = ({
  time,
  style = {},
  actionOnTimeElapsed = () => {},
}) => {
  const [remainingTime, setRemainingTime] = useState(time)

  useEffect(() => {
    if (remainingTime > 0) {
      setTimeout(() => {
        setRemainingTime((prev) => prev - 1)
      }, 1000)
    } else {
      actionOnTimeElapsed()
    }
  }, [remainingTime])

  return (
    <Flex
      className='timer'
      direction='row'
      justify='center'
      align='center'
      style={{
        ...style,
      }}
    >
      {`${Math.trunc(remainingTime / 60)} : ${remainingTime % 60}`}
    </Flex>
  )
}

export default Timer
