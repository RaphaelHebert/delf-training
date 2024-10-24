import React from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { useModeAndLevel } from '@/contexts/modeAndLevel'
import { COLOR_CORRECT } from '@/constants'
// import { gray } from '@radix-ui/colors'

type Props = {
  choices: Record<string, string>
  onSelect: <T>(value: T) => void
  isBig?: boolean
}

const Buttons: React.FC<Props> = ({ choices, onSelect, isBig = false }) => {
  const {
    modeAndLevel: { level, mode },
  } = useModeAndLevel()

  const defineVariant = (name: string) => {
    // TODO find types for radix colors
    return level.name === name || mode === name ? 'solid' : 'surface'
  }
  const defineContrast = (name: string) => {
    // TODO find types for radix colors
    return level.name === name || mode === name ? false : true
  }

  return Object.entries(choices).map(([name, comment]) => (
    <Button
      key={name}
      my='4'
      mx='4'
      size='4'
      style={{
        width: isBig ? '50%' : '35%',
        // maxWidth: '35%',
        minHeight: '5rem',
        boxSizing: 'border-box',
      }}
      onClick={() => onSelect(name)}
      type='button'
      //   variant={defineVariant(level)}
      color={COLOR_CORRECT}
      variant={defineVariant(name)}
      highContrast={defineContrast(name)}
      disabled={comment === 'not available now'}
    >
      <Flex
        justify='center'
        align='center'
        direction='column'
        as='div'
        m='7'
      >
        <Text
          size='4'
          as='div'
        >
          {name.toUpperCase()}
        </Text>
      </Flex>
    </Button>
  ))
}

export default Buttons
