import { Flex, Button } from '@radix-ui/themes'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import React from 'react'

const Header: React.FC = () => {
  return (
    <Flex
      justify='start'
      align='center'
      style={{
        borderBottom: '1px solid lightGrey',
      }} //for dev
      height='5rem'
    >
      <Button mx='3'>
        <HamburgerMenuIcon />
      </Button>
      DELF Training
    </Flex>
  )
}

export default Header
