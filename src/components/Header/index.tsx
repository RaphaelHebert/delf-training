import React from 'react'
import { Flex, Box } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Gear } from '@/components'
import { slate } from '@radix-ui/colors'

import './styles.css'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const openSettings = () => {
    navigate('/settings')
  }

  return (
    <Flex
      px='6'
      justify='between'
      align='center'
      style={{
        backgroundColor: slate.slate1, // Light background
        color: slate.slate12, // Darker text color
        padding: '1.5rem',
        width: '100%',
        boxSizing: 'border-box',
        borderBottom: `1px solid ${slate.slate6}`, // Subtle border
      }}
      height='5rem'
    >
      {/* <Button mx='3'>
        <HamburgerMenuIcon />
      </Button> */}
      <Box
        //as='div'
        className='logo'
        onClick={() => navigate('/')}
        title='Acceuil'
        m='3'
        p='4'
        style={{}}
      >
        DELF Training
      </Box>
      <Box onClick={openSettings}>
        <Gear
          size={40}
          fillColor='red'
        />
      </Box>
    </Flex>
  )
}

export default Header
