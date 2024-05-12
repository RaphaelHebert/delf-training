import ProfileButton from './ProfileButton'
import LoginButton from '@/components/LoginButton'

import { isLoggedIn } from '@/signals'

const Header: React.FC = () => {
  console.log(isLoggedIn.value)
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {isLoggedIn.value ? <ProfileButton /> : <LoginButton />}
    </div>
  )
}
export default Header
