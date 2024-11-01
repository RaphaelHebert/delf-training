import React, { useState } from 'react'
import { Button, Flex, Section } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Buttons } from '@/components'
import { COLOR_CORRECT } from '@/constants'
import { useModeAndLevel, mode, levelName } from '@/contexts/modeAndLevel'
import { levels, modes } from '@/constants'
import './styles.css' // This file will contain the custom CSS for animations

interface Props {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const SettingsDrawer: React.FC<Props> = ({ isOpen, onOpenChange }) => {
  const navigate = useNavigate()
  const {
    modeAndLevel: { mode, level },
    setLevel,
    setMode,
  } = useModeAndLevel()

  const [modeLocal, setModeLocal] = useState(mode)
  const [levelLocal, setLevelLocal] = useState(level.name)

  const confirmSelection = () => {
    setLevel(levelLocal)
    setMode(modeLocal)
    onOpenChange(false)
    navigate(`/${modeLocal}`)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay' />
        <Dialog.Content
          className='DialogContent'
          style={{ padding: 0, borderRadius: '4px 0 0 4px' }}
        >
          <Flex
            direction='column'
            flexGrow='1'
            justify='between'
          >
            <Flex
              direction='column'
              justify='start'
              flexGrow='1'
            >
              <Flex
                justify='start'
                align='center'
                direction='row'
                px='10px'
              >
                <Dialog.Close>
                  <button
                    aria-label='Close'
                    className='CloseButton'
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
                <Dialog.Title
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Settings
                </Dialog.Title>
              </Flex>

              <Separator />

              <Buttons
                choices={levels}
                onSelect={(lvl) => setLevelLocal(lvl as levelName)}
                choice={levelLocal}
              />
              <Separator />
              <Buttons
                choices={modes}
                onSelect={(value) => setModeLocal(value as mode)}
                choice={modeLocal}
              />
              <Separator />
              <Flex
                direction='column'
                flexGrow='1'
                justify='end'
              >
                <Flex justify='between'>
                  <Button
                    mx='auto'
                    mt='10px'
                    mb='25%'
                    size='4'
                    style={{
                      width: '90%',
                      minHeight: '3rem',
                    }}
                    onClick={confirmSelection}
                    type='button'
                    color={COLOR_CORRECT}
                    variant='classic'
                  >
                    SAVE
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Separator = () => (
  <Section
    width='100%'
    style={{ borderBottom: '1px dotted gray', padding: 0 }}
  />
)

export default SettingsDrawer
