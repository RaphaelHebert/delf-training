import LoginButton from '@/components/LoginButton'

import { profileOpen } from '@/signals'
import { Modal, Box, Stack } from '@mui/material'

const ProfilModal: React.FC = () => {
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
        <Stack>
          <LoginButton />
        </Stack>
      </Box>
    </Modal>
  )
}

export default ProfilModal
