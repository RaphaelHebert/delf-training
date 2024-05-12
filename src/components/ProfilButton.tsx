import { Button } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

import { profileOpen } from '@/signals'

const ProfilButton: React.FC = () => {
  return (
    <Button
      type='button'
      onClick={() => {
        profileOpen.value = true
      }}
      endIcon={<PermIdentityIcon />}
    >
      {/* TODO insert username */}
      profile
    </Button>
  )
}

export default ProfilButton
