import ProfilButton from './ProfilButton'
import LoginButton from '@/components/LoginButton'

import { isLoggedIn } from '@/signals'
const Header: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {isLoggedIn.value ? <ProfilButton /> : <LoginButton />}
    </div>
  )
}
export default Header
