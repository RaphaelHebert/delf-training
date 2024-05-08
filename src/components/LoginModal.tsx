import { useSignals } from '@preact/signals-react/runtime'

import { loginOpen } from '@/signals'
import { Modal, Box } from '@mui/material'
import LoginForm from './LoginForm'

const LoginModal: React.FC = () => {
  useSignals()

  return (
    <Modal
      open={loginOpen.value}
      onClose={() => {
        loginOpen.value = false
      }}
      aria-labelledby='login-modal-title'
      aria-describedby='login-modal-description'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          transform: loginOpen.value ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <h2 id='login-modal-title'>Login</h2>
        <LoginForm />
      </Box>
    </Modal>
  )
}

export default LoginModal
