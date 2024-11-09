import * as React from 'react'
import { Slot } from '@radix-ui/react-slot' // Import Slot from Radix
import { Flex, Card, Section } from '@radix-ui/themes'
import './styles.css' // Import your CSS file

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
  const styleOverride = {
    boxShadow: ghost ? 'unset' : ' 2px 4px 8px 6px rgba(0, 0, 0, 0.15)',
  }
  return (
    <Flex
      id='exerciceCard'
      direction='column'
      justify='center'
      align='center'
      width='94%'
      minWidth='350px'
      mx='auto'
    >
      <Slot
        className='responsive-container'
        style={styleOverride}
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
