import React, { PropsWithChildren } from 'react'
import { Flex, Button, Text } from '@radix-ui/themes'

import { useModeAndLevel } from '@/contexts/modeAndLevel'

interface Props {
  actionOnRetry?: () => void
}

const FinishScreen: React.FC<PropsWithChildren<Props>> = ({
  children,
  actionOnRetry = () => {},
}) => {
  const { retry } = useModeAndLevel()

  const retryPage = () => {
    actionOnRetry()
    retry()
  }

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      minHeight={'60dvh'}
    >
      <Flex
        flexGrow='1'
        align='center'
      >
        {children ? (
          children
        ) : (
          <Text>You reached the end of the questions!</Text>
        )}
      </Flex>
      <Button
        onClick={retryPage}
        mb='6'
        mt='4'
        size='4'
        style={{ minWidth: '45%' }}
      >
        Retry
      </Button>
    </Flex>
  )
}

export default FinishScreen
