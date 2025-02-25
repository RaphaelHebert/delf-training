import { Flex } from '@radix-ui/themes'
import React from 'react'

const WelcomeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isMobileScreen = window.innerWidth <= 768

  return (
    <Flex
      direction={isMobileScreen ? 'column' : 'row'}
      justify='center'
      width='100%'
      align='center'
      my='9'
      height='30%'
    >
      {children}
    </Flex>
  )
}

export default WelcomeContainer
