import { useSignals } from '@preact/signals-react/runtime'
import { Button } from '@mui/material'
import { loginOpen, isLoggedIn } from '@/signals'
import { logout } from '@/services/auth'

const LoginModal: React.FC = () => {
  useSignals()

  return (
    <Button
      type='button'
      variant='contained'
      color='primary'
      onClick={() => {
        isLoggedIn.value ? logout() : (loginOpen.value = true)
      }}
    >
      {' '}
      {isLoggedIn.value ? 'Logout' : 'Login'}
    </Button>
  )
}

export default LoginModal
