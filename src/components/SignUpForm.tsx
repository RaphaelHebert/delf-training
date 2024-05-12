import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'
import { useMutation } from 'react-query'

import { handleLoginSuccess } from '@/services/auth'
import { login } from '@/api/auth'
import { addUser } from '@/api/user'

import { IUserLogin } from '@/type/user'

interface FormData {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  })

  const loginMutation = useMutation(login, {
    onSuccess: ({ data }) => {
      console.log({ data })

      handleLoginSuccess(data)
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const mutation = useMutation(addUser, {
    onSuccess: (user) => {
      console.log({ user })
      loginMutation.mutate({ ...user, password: formData.password })
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Password checking logic
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long')
      return
    }

    const payload: IUserLogin = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
    }

    mutation.mutate(payload)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // control form
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='login-modal-title'>SignUp</h2>

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
        name='username'
        id='usernameInput'
        label='Username'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.username}
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
      <TextField
        name='confirmPassword'
        id='confirmPasswordInput'
        type='password' // Corrected to 'password'
        label='Confirm Password'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Create Account
      </Button>
    </form>
  )
}

export default SignUpForm
