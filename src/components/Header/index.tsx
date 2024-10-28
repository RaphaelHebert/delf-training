import React, { useState } from 'react'
import { Flex, IconButton, Box } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Gear } from '@/components'
import { slate } from '@radix-ui/colors'

import './styles.css'
import { logoWithName } from '@/assets'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const isMobileScreen = window.innerWidth <= 640

  const openSettings = () => {
    navigate('/settings')
  }

  return (
    <Flex
      px='6'
      justify='between'
      align='center'
      minHeight='60px'
      style={{
        backgroundColor: slate.slate1, // Light background
        color: slate.slate12, // Darker text color
        padding: isMobileScreen ? '0.75 rem' : '1.5rem',
        width: '100%',
        boxSizing: 'border-box',
        borderBottom: `1px solid ${slate.slate6}`, // Subtle border
      }}
      height={isMobileScreen ? '3rem' : '5rem'}
    >
      <IconButton
        onClick={() => navigate('/')}
        title='Acceuil'
        ml='3'
        mb='2'
        mt='2'
        style={{ background: 'transparent' }}
      >
        <img
          className='logo'
          src={logoWithName}
          alt='app logo'
          width={isMobileScreen ? '50px' : '70px'}
        />
      </IconButton>
      <Box
        onClick={openSettings}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? 'rotate' : ''} // Apply the rotate class on hover
        style={{ cursor: 'pointer', display: 'inline-block' }}
        height='40px'
        width='40px'
      >
        <Gear
          size={40}
          fillColor={isHovered ? slate.slate12 : slate.slate10}
        />
      </Box>
    </Flex>
  )
}

export default Header
