import '@/App.css'
import { Routes, Route } from 'react-router-dom'
import DiceRoll from './pages/DiceRoll'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      {/* TODO: add a loader to the Route */}
      <Route
        path='/'
        element={<DiceRoll />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
    </Routes>
  )
}
export default App
