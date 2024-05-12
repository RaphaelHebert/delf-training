import { useState } from 'react'
import { useSignals } from '@preact/signals-react/runtime'

import { loginOpen } from '@/signals'
import { Modal, Box, Button } from '@mui/material'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const LoginModal: React.FC = () => {
  useSignals()
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const toggleIsLogin = (): void => {
    setIsLogin((prev) => !prev)
  }

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
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <p>
          {isLogin ? "Don't have an account yet?" : 'Already have an account?'}
        </p>
        <Button
          type='button'
          variant='contained'
          color='primary'
          onClick={toggleIsLogin}
        >
          {isLogin ? 'Create Account' : 'Login'}
        </Button>
      </Box>
    </Modal>
  )
}

export default LoginModal
