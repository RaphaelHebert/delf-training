import { useSignals } from '@preact/signals-react/runtime'
import { loginOpen } from '@/signals'
import { Button, TextField } from '@mui/material'

const LoginForm: React.FC = () => {
  useSignals()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your login logic here
    loginOpen.value = false
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Username'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
