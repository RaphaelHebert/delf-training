import { Flex, Text } from '@radix-ui/themes'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import React from 'react'

const Header: React.FC = () => {
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
    </Flex>
  )
}

export default Header
