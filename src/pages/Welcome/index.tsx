import React, { useState } from 'react'
import { Button, Flex } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { Buttons } from '@/components'
import { useModeAndLevel, mode, levelName } from '@/contexts/modeAndLevel'
import { levels, modes } from '@/constants'

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  const {
    modeAndLevel: { mode, level },
    setLevel,
    setMode,
  } = useModeAndLevel()

  const [levelConfirmed, setLevelConfirmed] = useState<boolean>(false)

  const chooseLevel = <T,>(value: T) => {
    if (levelConfirmed) {
      setMode(value as mode)
    } else {
      setLevel(value as levelName)
    }
  }

  const confirm = () => {
    if (!levelConfirmed) {
      setLevelConfirmed(true)
      return
    }
    navigate(`${mode}`)
  }

  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
    >
      <Flex
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'
      >
        {levelConfirmed ? (
          <Buttons
            isBig
            onSelect={chooseLevel}
            choices={modes}
          />
        ) : (
          <Buttons
            onSelect={chooseLevel}
            choices={levels}
          />
        )}
      </Flex>
      <Button
        type='button'
        onClick={confirm}
        mx='9'
        my='9'
        size='4'
        style={{ width: '30%' }}
        autoFocus
      >
        {`Select ${levelConfirmed ? mode : level.name}`}
      </Button>
    </Flex>
  )
}

export default Welcome
