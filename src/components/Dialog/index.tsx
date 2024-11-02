import { Flex, Button, Text, Section } from '@radix-ui/themes'
import './styles.css'

type Props = {
  isOpen: boolean
  body: string | React.ReactNode
  showCancel?: boolean
  actionOnConfirm: () => void
  actionOnCancel?: () => void
  buttonMessage?: string
  title?: string
}

const Dialog: React.FC<Props> = ({
  isOpen,
  actionOnConfirm,
  actionOnCancel,
  showCancel = true,
  body,
  buttonMessage = 'Confirm',
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
        <Section
          width='100%'
          className='title'
        >
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
            onClick={actionOnConfirm}
            autoFocus
            size='3'
            mt='5'
          >
            {buttonMessage}
          </Button>
        </Flex>
      </Flex>
    </dialog>
  )
}

export default Dialog
