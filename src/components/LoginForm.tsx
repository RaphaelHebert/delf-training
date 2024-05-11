import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'
import { useMutation } from 'react-query'

import { authToken, loginOpen } from '@/signals'
import { login } from '@/api/auth'
interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const mutation = useMutation(login, {
    onSuccess: ({ data }) => {
      authToken.value = data
      loginOpen.value = false
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent default form submission behavior
    // Access form data from the state
    mutation.mutate(formData)

    // Call your login function or API with formData
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // Update form data state when input values change
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
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
