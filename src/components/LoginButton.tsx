import { useSignals } from '@preact/signals-react/runtime'
import { Button } from '@mui/material'
import { loginOpen } from '../signals'

const LoginModal: React.FC = () => {
  useSignals()

  return (
    <Button
      type='button'
      variant='contained'
      color='primary'
      onClick={() => {
        loginOpen.value = true
      }}
    >
      {' '}
      Login{' '}
    </Button>
  )
}

export default LoginModal
