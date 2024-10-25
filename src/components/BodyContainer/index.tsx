import React, { PropsWithChildren } from 'react'
import { Flex } from '@radix-ui/themes'

const BodyContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      flexGrow='1'
      direction='column'
      justify='start'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
      className='mukta-regular'
    >
      <Flex
        justify='start'
        mt='3'
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default BodyContainer
