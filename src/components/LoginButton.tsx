import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/login'
import { loginOpen, isLoggedIn, profileOpen } from '@/signals'
import { logout } from '@/services/auth'

const LoginModal: React.FC = () => {
  return (
    <Button
      type='button'
      variant='contained'
      color='primary'
      onClick={() => {
        profileOpen.value = false
        isLoggedIn.value ? logout() : (loginOpen.value = true)
      }}
      startIcon={<LoginIcon />}
    >
      {isLoggedIn.value ? 'Logout' : 'Login'}
    </Button>
  )
}

export default LoginModal
