import React, { PropsWithChildren } from 'react'
import { Flex, Button, Text } from '@radix-ui/themes'

import { ResponsiveCard } from '@/components'
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
    <ResponsiveCard>
      <Flex flexGrow='1'>
        {children ? (
          children
        ) : (
          <Text
            m='auto'
            align='center'
          >
            You reached the end of the questions!
          </Text>
        )}
      </Flex>
      <Button
        onClick={retryPage}
        m='auto'
        mb='6'
        size='4'
        style={{ width: '55%' }}
      >
        Retry
      </Button>
    </ResponsiveCard>
  )
}

export default FinishScreen
