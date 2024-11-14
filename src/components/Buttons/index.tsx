import { Button, Flex, Text } from '@radix-ui/themes'

import { ButtonVariantType } from '@/types'
import { COLOR_CORRECT } from '@/constants'

type Props = {
  choices: string[]
  onSelect: <T>(value: T) => void
  choice?: string
}

const Buttons: React.FC<Props> = ({ choices, onSelect, choice = '' }) => {
  const defineVariant = (name: string): ButtonVariantType => {
    return choice === name ? 'solid' : 'surface'
  }

  const defineContrast = (name: string): boolean => {
    return choice === name ? false : true
  }

  return (
    <Flex
      width='100%'
      direction='column'
      justify='start'
      align='center'
      wrap='nowrap'
      mt='10px'
      mb='20px'
      mx='auto'
    >
      {Object.values(choices).map((name) => (
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
          <Text
            m='7'
            align='center'
            size='4'
            as='div'
          >
            {name}
          </Text>
        </Button>
      ))}
    </Flex>
  )
}

export default Buttons
