import { useSignals } from '@preact/signals-react/runtime'
import { Route, Routes } from 'react-router-dom'

import LoginModal from '@/components/LoginModal'

import DiceRoll from './DiceRoll'

const Home: React.FC = () => {
  useSignals()

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<DiceRoll />}
        />
      </Routes>
      <LoginModal />
    </>
  )
}

export default Home
