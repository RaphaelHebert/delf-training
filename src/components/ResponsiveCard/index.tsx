import React from 'react'
import classnames from 'classnames'
import { Slot } from '@radix-ui/react-slot'
import { Flex, Card, Section } from '@radix-ui/themes'

import './styles.css'

type PropsWithMandatoryChildren<P = unknown> = P & { children: React.ReactNode }

type Props = {
  header?: React.ReactNode
  ghost?: boolean
}

const ResponsiveCard: React.FC<PropsWithMandatoryChildren<Props>> = ({
  children,
  ghost,
  header,
}) => {
  return (
    <Flex
      id='exerciseCard'
      direction='column'
      justify='center'
      align='center'
      width='94%'
      minWidth='350px'
      mx='auto'
    >
      <Slot
        className={classnames(
          'responsive-container',
          `${ghost ? 'noShadow' : ''}`
        )}
      >
        <Card variant='ghost'>
          <Flex
            minHeight='70dvh'
            direction='column'
            justify='start'
            wrap={'nowrap'}
            align='center'
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            <Section
              m='0'
              mt='3'
              p='1'
              width='100%'
              minWidth={'30px'}
            >
              {' '}
              {header}
            </Section>
            <Flex
              direction='column'
              justify='center'
              flexGrow='1'
              width='100%'
            >
              {children}
            </Flex>
          </Flex>
        </Card>
      </Slot>
    </Flex>
  )
}

export default ResponsiveCard
