import DeleteIcon from '@mui/icons-material/Delete'
import { useMutation } from 'react-query'
import { Button } from '@mui/material'

import { deleteUser } from '@/api/user'
import { IUser } from '@/type/user'
import LoginButton from '@/components/LoginButton'
import UpdateForm from '@/components/UpdateForm'
import { profileOpen, user } from '@/signals'
import { Modal, Box, Stack } from '@mui/material'
import { logout } from '@/services/auth'

const ProfileModal: React.FC = () => {
  const deleteMutation = useMutation<void, Error, IUser>(deleteUser, {
    onSuccess: () => {
      logout()
      profileOpen.value = false
    },
    onError: (error: Error) => {
      // Handle errors, e.g., log them or show a notification
      console.log(error)
    },
  })

  return (
    <Modal
      open={profileOpen.value}
      onClose={() => {
        profileOpen.value = false
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
          transform: profileOpen.value ? 'translateX(50%)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Stack spacing={2}>
          <UpdateForm />
          <LoginButton />
          <Button
            type='button'
            variant='outlined'
            color='secondary'
            onClick={() => {
              if (user) {
                deleteMutation.mutate(user.value as unknown as IUser)
              }
            }}
            startIcon={<DeleteIcon />}
          >
            delete my account
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default ProfileModal
