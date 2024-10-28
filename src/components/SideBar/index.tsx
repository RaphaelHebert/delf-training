import React from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import { useModeAndLevel } from '@/contexts/modeAndLevel'
import { slate } from '@radix-ui/colors'
import './styles.css'
type Props = {
  count: number
  goodAnswers: number
  children: React.ReactNode
}
const SideBar: React.FC<Props> = ({ count, children }) => {
  const {
    modeAndLevel: { level, mode },
  } = useModeAndLevel()

  return (
    <Flex
      gap='3'
      width='25%'
      justify='start'
      align='center'
      direction='column'
      className='largeScreen'
      style={{
        backgroundColor: slate.slate1,
        borderRight: '1px solid lightGrey',
      }}
    >
      <Heading
        as='h3'
        size='6'
        mt='6'
        align='center'
      >
        Level: {level.name}
      </Heading>
      <Heading
        as='h4'
        size='4'
        mt='6'
        align='center'
      >
        {`${count} question${count > 1 ? 's' : ''} done`}
      </Heading>

      <Heading
        as='h2'
        size='4'
        mt='2'
        mb='6'
        align='center'
      >
        {`Mode ${mode}`}
      </Heading>
      {children}
    </Flex>
  )
}

export default SideBar
