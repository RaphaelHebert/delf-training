import LoginButton from './LoginButton'
import UpdateForm from './UpdateForm'
import DeleteForm from './DeleteForm'

import { profileOpen } from '@/signals'
import { Modal, Box, Stack } from '@mui/material'

const ProfileModal: React.FC = () => {
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
          <DeleteForm />
        </Stack>
      </Box>
    </Modal>
  )
}

export default ProfileModal
