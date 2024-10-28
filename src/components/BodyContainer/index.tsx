import React, { PropsWithChildren } from 'react'
import { Flex } from '@radix-ui/themes'

const BodyContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const isMobileScreen = window.innerWidth <= 768

  return (
    <Flex
      flexGrow='1'
      direction='column'
      justify='center'
      align='stretch'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
      className='mukta-regular'
    >
      {isMobileScreen ? (
        children
      ) : (
        <Flex
          flexGrow='1'
          justify='start'
        >
          {children}
        </Flex>
      )}
    </Flex>
  )
}

export default BodyContainer
