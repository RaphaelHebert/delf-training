import { useState } from 'react'
import { Flex, Text, Switch } from '@radix-ui/themes'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import React from 'react'

const Header: React.FC = () => {
  const [isExamMode, setIsExamMode] = useState(false)

  const toggleExamMode = () => {
    setIsExamMode((prev) => !prev)
  }

  return (
    <Flex
      px='6'
      justify='between'
      align='center'
      style={{
        borderBottom: '1px solid lightGrey',
      }} //for dev
      height='5rem'
    >
      {/* <Button mx='3'>
        <HamburgerMenuIcon />
      </Button> */}
      <Text
        as='label'
        size='2'
      >
        {' '}
        DELF Training
      </Text>

      <Text
        as='label'
        size='2'
      >
        <Flex gap='2'>
          <Text
            as='span'
            color={isExamMode ? 'gray' : 'mint'}
            style={isExamMode ? {} : { fontWeight: 700 }}
          >
            Training mode
          </Text>
          <Switch
            size='1'
            checked={isExamMode} // Bind the state to the switch
            onCheckedChange={toggleExamMode}
          />
          <Text
            as='span'
            color={isExamMode ? 'mint' : 'gray'}
            style={isExamMode ? { fontWeight: 700 } : {}}
          >
            Exam mode
          </Text>
        </Flex>
      </Text>
    </Flex>
  )
}

export default Header
