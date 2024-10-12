import './styles.css'

type Props = {
  isOpen: boolean
  body: string
  showCancel?: boolean
  actionOnConfirm: () => void
  actionOnCancel?: () => void
}

const Dialog: React.FC<Props> = ({
  isOpen,
  actionOnConfirm,
  actionOnCancel,
  showCancel = true,
  body,
}) => {
  const dialogElement: HTMLDialogElement | null =
    document.querySelector('#favDialog')

  if (dialogElement) {
    isOpen ? dialogElement.showModal() : dialogElement.close()
  }

  return (
    <dialog id='favDialog'>
      <p>{body}</p>
      <div>
        {showCancel && actionOnCancel && (
          <button
            type='button'
            value='cancel'
            formMethod='dialog'
            onClick={actionOnCancel}
          >
            Cancel
          </button>
        )}
        <button
          type='button'
          id='confirmBtn'
          value='default'
          onClick={actionOnConfirm}
        >
          Confirm
        </button>
      </div>
    </dialog>
  )
}

export default Dialog
