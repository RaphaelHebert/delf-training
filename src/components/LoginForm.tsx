import React, { useState, ChangeEvent, FormEvent } from 'react'
import Alert from '@mui/material/Alert'
import { useMutation } from 'react-query'
import { Button, TextField } from '@mui/material'
import * as yup from 'yup' // Import Yup

import { handleLoginSuccess } from '@/services/auth'
import { login, ILoginInput } from '@/api/auth'

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<ILoginInput>({
    email: '',
    password: '',
  })
  const [errorLogin, setErrorLogin] = useState<string>('') // Error message state
  const [formErrors, setFormErrors] = useState<Partial<ILoginInput>>({}) // State to track form errors

  const mutation = useMutation(login, {
    onSuccess: ({ data }) => {
      handleLoginSuccess(data)
    },
    onError: () => {
      setErrorLogin('Incorrect credentials')
    },
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Validate form data using Yup schema
      await loginSchema.validate(formData, { abortEarly: false })
      mutation.mutate(formData)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // Update form errors state with Yup validation errors
        const errors: Partial<ILoginInput> = {}
        error.inner.forEach((err) => {
          errors[err.path as keyof ILoginInput] = err.message
        })
        setFormErrors(errors)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setErrorLogin('') // Clear error message
    // Control form
    setFormData({ ...formData, [name]: value })
    // Clear errors for changed field
    setFormErrors({ ...formErrors, [name]: undefined })
  }

  // Yup validation schema for login form
  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })

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
        error={!!formErrors.email} // Set error state based on formErrors
        helperText={formErrors.email} // Display error message if present
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
      {errorLogin && <Alert severity='error'>{errorLogin}</Alert>}{' '}
      {/* Display error message */}
      <Button
        type='submit'
        variant='contained'
        color='primary'
        sx={{ width: '100%', mt: '20px' }}
        disabled={Object.values(formErrors).some((error) => !!error)} // Disable button if any form errors exist
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
