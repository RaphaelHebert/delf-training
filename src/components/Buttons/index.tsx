import React from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { COLOR_CORRECT } from '@/constants'

type Props = {
  choices: Record<string, string>
  onSelect: <T>(value: T) => void
  choice?: string
  isBig?: boolean
}

const Buttons: React.FC<Props> = ({ choices, onSelect, choice = '' }) => {
  const defineVariant = (name: string) => {
    // TODO find types for radix colors
    return choice === name ? 'solid' : 'surface'
  }

  const defineContrast = (name: string) => {
    // TODO find types for radix colors
    return choice === name ? false : true
  }

  return (
    <Flex
      width='100%'
      direction='column'
      justify='start'
      align='center'
      wrap='nowrap'
      as='div'
      mt='20px'
      mb='40px'
      mx='auto'
    >
      {Object.entries(choices).map(([name]) => (
        <Button
          key={name}
          mt='10px'
          size='4'
          style={{
            width: '90%',
            minHeight: '3rem',
            boxSizing: 'border-box',
          }}
          onClick={() => onSelect(name)}
          type='button'
          color={COLOR_CORRECT}
          variant={defineVariant(name)}
          highContrast={defineContrast(name)}
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
      ))}
    </Flex>
  )
}

export default Buttons
