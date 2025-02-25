import React from 'react'

import { BodyContainer, Footer, WelcomeContainer } from '@/components'
import { Box, Flex, Text, Button, Container } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Flex
      direction='column'
      flexGrow='1'
    >
      <BodyContainer>
        {/* Background  */}
        {/* <Container
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'lightblue',
            zIndex: -1,
          }}
        >
          <img
            src={clouds}
            style={{ objectFit: 'fill', opacity: '.8' }}
            alt='background'
            width='100%'
            height='100%'
          />
        </Container> */}
        <Container>
          <WelcomeContainer>
            <Box
              maxWidth='55%'
              mr='9'
            >
              <Text>
                🇫🇷 Master French, explore free exercises, tips, and advice to
                help you speak like a local and thrive 🌟
              </Text>
            </Box>
            <Flex direction='column'>
              <Button
                onClick={() => navigate('./general-questions')}
                my='3'
                size='4'
              >
                Start to learn now!
              </Button>
            </Flex>
          </WelcomeContainer>
          <WelcomeContainer>
            <Box
              maxWidth='55%'
              mr='9'
            >
              <Text>
                Get ready for Your French Journey! 🇫🇷 Master French and settle
                in France with ease. Explore tips, and advice to help you
                through your journey. À bientôt! 🌟
              </Text>
            </Box>
            <Flex direction='column'>
              <Button
                m='3'
                size='4'
                onClick={() => navigate('./')}
              >
                Check our advices
              </Button>
            </Flex>
          </WelcomeContainer>
        </Container>
      </BodyContainer>
      <Footer />
    </Flex>
  )
}

export default Welcome
