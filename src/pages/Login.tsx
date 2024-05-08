import React, { useState } from 'react'
import { Button, Modal, Box, TextField } from '@mui/material'

const LoginModal: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your login logic here
    handleClose()
  }

  return (
    <>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
            transform: open ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <h2 id='login-modal-title'>Login</h2>
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
        </Box>
      </Modal>
    </>
  )
}

export default LoginModal
