import { Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import { isUserLoggedIn } from '@/services/auth'

function App() {
  isUserLoggedIn()
  return (
    <Routes>
      {/* TODO: add a loader to the Route */}
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  )
}
export default App
