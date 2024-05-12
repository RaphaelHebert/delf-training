import { Button } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

import { profileOpen, user } from '@/signals'

const ProfileButton: React.FC = () => {
  return (
    <Button
      type='button'
      onClick={() => {
        profileOpen.value = true
      }}
      endIcon={<PermIdentityIcon />}
    >
      {user.value && user.value.username}
    </Button>
  )
}

export default ProfileButton
