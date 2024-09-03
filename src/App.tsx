import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages'

function App() {
  return (
    <Routes>
      {/* TODO: add a loader to the Route */}
      <Route
        path='*'
        element={<Home />}
      />
      {/* some comment */}
    </Routes>
  )
}
export default App
