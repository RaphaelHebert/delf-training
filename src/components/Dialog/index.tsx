import { Flex, Button, Text, Section } from '@radix-ui/themes'

import './styles.css'

type Props = {
  isOpen: boolean
  body: React.ReactNode
  actionOnConfirm: () => void
  actionOnCancel?: () => void
  buttonMessage?: string
  title?: string
  showCancel?: boolean
}

const Dialog: React.FC<Props> = ({
  isOpen,
  actionOnConfirm,
  actionOnCancel,
  body,
  buttonMessage = 'Confirm',
  showCancel = true,
  title = '',
}) => {
  const dialogElement: HTMLDialogElement | null =
    document.querySelector('#favDialog')

  if (dialogElement) {
    if (isOpen) {
      dialogElement.showModal()
    } else {
      dialogElement.close()
    }
  }

  return (
    <dialog id='favDialog'>
      {title && (
        <Section className='title'>
          <Text as='p'>{title}</Text>
        </Section>
      )}
      <Flex
        justify='center'
        align='center'
        direction='column'
      >
        {body}
        <Flex
          width='100%'
          justify='end'
          align='center'
        >
          {showCancel && actionOnCancel && (
            <Button
              type='button'
              id='cancelBtn'
              value='cancel'
              formMethod='dialog'
              variant='surface'
              onClick={actionOnCancel}
            >
              Cancel
            </Button>
          )}
          <Button
            type='button'
            id='confirmBtn'
            value='default'
            size='3'
            mt='5'
            onClick={actionOnConfirm}
            autoFocus
          >
            {buttonMessage}
          </Button>
        </Flex>
      </Flex>
    </dialog>
  )
}

export default Dialog
