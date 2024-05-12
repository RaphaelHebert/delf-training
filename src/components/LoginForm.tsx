import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'
import { useMutation } from 'react-query'

import { handleLoginSuccess } from '@/services/auth'
import { login, ILoginInput } from '@/api/auth'

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<ILoginInput>({
    email: '',
    password: '',
  })

  const mutation = useMutation(login, {
    onSuccess: ({ data }) => {
      handleLoginSuccess(data)
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate(formData)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // control form
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='login-modal-title'>Login</h2>
      <TextField
        name='email'
        id='emailInput'
        label='Email'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name='password'
        id='passwordInput'
        type='password'
        label='Password'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.password}
        onChange={handleChange}
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
