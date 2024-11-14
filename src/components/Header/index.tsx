import React, { useState } from 'react'
import classnames from 'classnames'
import { Flex, IconButton, Box } from '@radix-ui/themes'
import { slate } from '@radix-ui/colors'

import { Gear, SettingsDrawer } from '@/components'
import { logoWithName } from '@/assets'

import './styles.css'

const Header: React.FC = () => {
  const isMobileScreen = window.innerWidth <= 768

  const [isHovered, setIsHovered] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const toggleHovered = () => setIsHovered((prev) => !prev)

  const openSettings = () => {
    setIsSettingsOpen(true)
  }

  return (
    <>
      <Flex
        justify='between'
        align='center'
        p={isMobileScreen ? '0.75 rem' : '1.5rem'}
        px='6'
        width='100%'
        height={isMobileScreen ? '4rem' : '5rem'}
        className='header'
      >
        <IconButton
          title='Acceuil'
          ml='3'
          mb='2'
          mt='2'
        >
          <img
            className='logo'
            src={logoWithName}
            alt='app logo'
            width={isMobileScreen ? '50px' : '70px'}
            height={isMobileScreen ? '50px' : '70px'}
          />
        </IconButton>
        <Box
          onClick={openSettings}
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}
          className={classnames('gearBox', `${isHovered ? 'rotate' : ''}`)} // Apply the rotate class on hover
          height='40px'
          width='40px'
        >
          <Gear
            size={40}
            fillColor={isHovered ? slate.slate12 : slate.slate10}
          />
        </Box>
      </Flex>
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
      />{' '}
    </>
  )
}

export default Header
