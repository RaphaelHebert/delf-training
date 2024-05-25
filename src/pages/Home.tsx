import { Route, Routes } from 'react-router-dom'

import { LoginModal, ProfileModal, Header } from '@/components'

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
