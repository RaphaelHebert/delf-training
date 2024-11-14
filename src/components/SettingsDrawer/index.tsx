import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Section } from '@radix-ui/themes'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Buttons } from '@/components'
import { COLOR_CORRECT } from '@/constants'
import { allQuestions, type levelName } from '@/data'
import { capitalizeFirstLetter } from '@/utils'
import { useModeAndLevel, modes, type mode } from '@/contexts/modeAndLevel'

import './styles.css'

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

  const [modeLocal, setModeLocal] = useState(
    capitalizeFirstLetter(mode).replace('-', ' ')
  )
  const [levelLocal, setLevelLocal] = useState(level.name)

  const newMode = modeLocal.replace(' ', '-').toLowerCase().trim()

  const confirmSelection = () => {
    navigate(`/${newMode}`)
    setLevel(levelLocal)
    setMode(newMode as mode)
    onOpenChange(false)
  }

  const modesToChooseFrom = [...modes].map((mode) =>
    capitalizeFirstLetter(mode).replace('-', ' ')
  )

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
                  className='DialogTitle'
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
                choices={Object.keys(allQuestions)}
                onSelect={(lvl) => setLevelLocal(lvl as levelName)}
                choice={levelLocal}
              />
              <Separator />
              <Buttons
                choices={modesToChooseFrom}
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
