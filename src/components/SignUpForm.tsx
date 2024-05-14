import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'
import { useMutation } from 'react-query'
import * as yup from 'yup'

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
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({}) // State to track form errors

  const loginMutation = useMutation(login, {
    onSuccess: ({ data }) => {
      handleLoginSuccess(data)
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const mutation = useMutation(addUser, {
    onSuccess: (user) => {
      loginMutation.mutate({ ...user, password: formData.password })
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Validate form data using Yup schema
      await signUpSchema.validate(formData, { abortEarly: false })

      // Password checking logic
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const payload: IUserLogin = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      }

      mutation.mutate(payload)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // Update form errors state with Yup validation errors
        const errors: Partial<FormData> = {}
        error.inner.forEach((err) => {
          errors[err.path as keyof FormData] = err.message
        })
        setFormErrors(errors)
      } else {
        console.error(error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // Control form
    setFormData({ ...formData, [name]: value })
    // Clear errors for changed field
    setFormErrors({ ...formErrors, [name]: undefined })
  }

  const signUpSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    username: yup
      .string()
      .min(2, 'Username must be at least 8 characters')
      .required('Username is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  })

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
        error={!!formErrors.email} // Set error state based on formErrors
        helperText={formErrors.email} // Display error message if present
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
        error={!!formErrors.username} // Set error state based on formErrors
        helperText={formErrors.username} // Display error message if present
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
        error={!!formErrors.password} // Set error state based on formErrors
        helperText={formErrors.password} // Display error message if present
      />
      <TextField
        name='confirmPassword'
        id='confirmPasswordInput'
        type='password'
        label='Confirm Password'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        error={!!formErrors.confirmPassword} // Set error state based on formErrors
        helperText={formErrors.confirmPassword} // Display error message if present
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
