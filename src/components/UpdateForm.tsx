import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@mui/material'
import { useMutation } from 'react-query'

import { user } from '@/signals'
import { updateUser } from '@/api/user'
import { IUser } from '@/type/user'

interface FormData {
  email: string
  username: string
}

const UpdateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: user.value.email,
    username: user.value.username,
  })

  const [isUpdating, setIsUpdating] = useState<boolean>(false)

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      setIsUpdating(false)
    },
    onError: () => {
      console.log('TODO: handle catch')
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const payload: IUser = {
      email: formData.email,
      username: formData.username,
      uid: user.value.uid,
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
      <h2 id='login-modal-title'>{user.value.username}</h2>

      <TextField
        name='email'
        id='emailInput'
        label='Email'
        variant='outlined'
        margin='normal'
        fullWidth
        required
        value={formData.email}
        disabled={!isUpdating}
        onChange={handleChange}
      />
      <TextField
        name='username'
        id='usernameInput'
        label='Username'
        variant='outlined'
        margin='normal'
        fullWidth
        disabled={!isUpdating}
        required
        value={formData.username}
        onChange={handleChange}
      />
      {!isUpdating ? (
        <Button
          type='submit'
          variant='outlined'
          color='primary'
          onClick={() => {
            setIsUpdating(true)
          }}
        >
          Update Account details
        </Button>
      ) : (
        <>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            onClick={() => {
              console.log('updating...')
            }}
          >
            Confirm changes
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            onClick={() => {
              setIsUpdating(false)
              setFormData({
                username: user.value.username,
                email: user.value.email,
              })
            }}
          >
            Cancel
          </Button>
        </>
      )}
    </form>
  )
}

export default UpdateForm
