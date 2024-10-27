import { Flex, Text, Switch } from '@radix-ui/themes'

type Props = {
  textLeft?: string
  textRight?: string
  toggleSelect: () => void
  isSelected: boolean
}

const CustomSwitch: React.FC<Props> = ({
  textLeft,
  textRight,
  toggleSelect,
  isSelected,
}) => {
  return (
    <Flex
      justify='center'
      align='center'
      gap='2'
    >
      {textLeft && (
        <Text
          as='span'
          color={isSelected ? 'gray' : 'mint'}
          style={isSelected ? { cursor: 'pointer' } : { fontWeight: 700 }}
        >
          {textLeft}
        </Text>
      )}
      <Switch
        size='1'
        checked={isSelected} // Bind the state to the switch
        onCheckedChange={toggleSelect}
      />
      {textRight && (
        <Text
          as='span'
          title='20 questions and final score'
          color={isSelected ? 'mint' : 'gray'}
          style={isSelected ? { fontWeight: 700 } : { cursor: 'pointer' }}
        >
          {textRight}
        </Text>
      )}
    </Flex>
  )
}

export default CustomSwitch
