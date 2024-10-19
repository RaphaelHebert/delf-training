import React, { useRef, useEffect } from 'react'
import { Button, Flex, Heading, Box, Section } from '@radix-ui/themes'
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

  return (
    <Flex
      direction='column'
      justify='between'
      align='center'
    >
      <Flex
        direction='row'
        justify='start'
        align='center'
        width='100%'
      >
        <Box width='15%'>
          <Heading as='h2'>Levels</Heading>
        </Box>
        <Flex
          justify='center'
          align='center'
          direction='row'
          wrap='wrap'
          mt='7'
        >
          <Buttons
            choices={levels}
            onSelect={(lvl) => setLevel(lvl as levelName)}
          />
        </Flex>
      </Flex>
      <Section
        width='100%'
        style={{ borderBottom: '1px dotted gray', padding: 0 }}
      />
      <Flex
        width='100%'
        direction='row'
        justify='start'
        align='center'
      >
        <Box width='15%'>
          <Heading as='h2'>Mode</Heading>
        </Box>
        <Buttons
          choices={modes}
          onSelect={(value) => setMode(value as mode)}
        />
      </Flex>
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
          mb='9'
          mr='9'
          size='4'
          onClick={cancelSelection}
        >
          Cancel
        </Button>
        <Button
          mb='9'
          size='4'
          onClick={confirmSelection}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  )
}

export default Settings
