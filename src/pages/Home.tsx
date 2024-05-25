import { Route, Routes } from 'react-router-dom'

import LoginModal from '@/components/LoginModal'
import ProfileModal from '@/components/ProfileModal'

import Header from '@/components/Header'

import DiceRoll from './DiceRoll'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<DiceRoll />}
        />
      </Routes>
      <ProfileModal />
      <LoginModal />
    </>
  )
}

export default Home
