import React, { useRef, useEffect } from 'react'
import { Button, Flex, Heading, Section } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { Buttons } from '@/components'
import {
  useModeAndLevel,
  mode,
  level,
  levelName,
} from '@/contexts/modeAndLevel'
import { levels, modes } from '@/constants'

const Settings: React.FC = () => {
  const navigate = useNavigate()
  const { modeAndLevel, setLevel, setMode } = useModeAndLevel()

  const memoizedSettings = useRef<{ mode: mode; level: level }>({
    mode: modeAndLevel.mode,
    level: { ...modeAndLevel.level },
  })

  useEffect(() => {
    memoizedSettings.current = modeAndLevel
  }, [])

  const confirmSelection = () => {
    navigate(`/${modeAndLevel.mode}`)
    return
  }

  const cancelSelection = () => {
    setLevel(memoizedSettings.current.level.name as levelName)
    setMode(memoizedSettings.current.mode as mode)
    navigate(`/${memoizedSettings.current.mode}`)
  }

  const buttonsStyle = {
    width: '40%',
    minHeight: '5rem',
  }

  return (
    <Flex
      flexGrow='1'
      direction='column'
      justify='between'
      align='center'
    >
      <Heading as='h2'>Levels</Heading>
      <Buttons
        choices={levels}
        onSelect={(lvl) => setLevel(lvl as levelName)}
      />

      <Section
        width='100%'
        style={{ borderBottom: '1px dotted gray', padding: 0 }}
      />

      <Heading as='h2'>Mode</Heading>
      <Buttons
        choices={modes}
        onSelect={(value) => setMode(value as mode)}
      />
      <Section
        width='100%'
        style={{ borderBottom: '1px dotted gray', padding: 0 }}
      />
      <Flex
        justify='center'
        direction='row'
        align='center'
        width='100%'
      >
        <Button
          mr='4'
          size='4'
          type='button'
          style={buttonsStyle}
          onClick={cancelSelection}
        >
          Cancel
        </Button>
        <Button
          size='4'
          type='button'
          style={buttonsStyle}
          onClick={confirmSelection}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  )
}

export default Settings
