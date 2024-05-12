import { Route, Routes } from 'react-router-dom'

import LoginModal from '@/components/LoginModal'
import ProfilModal from '@/components/ProfilModal'

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
      <ProfilModal />
      <LoginModal />
    </>
  )
}

export default Home
