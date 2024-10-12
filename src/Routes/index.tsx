import { Routes, Route } from 'react-router-dom'
import { Training, Welcome, Exam, Settings } from '@/pages'
import { Flex } from '@radix-ui/themes'

function Pages() {
  return (
    <Flex
      justify='center'
      flexGrow='1'
    >
      <Routes>
        {/* TODO: add a loader to the Route */}\
        <Route
          path='*'
          element={<Welcome />}
        />
        <Route
          path='/training'
          element={<Training />} // TODO change naming and split to Exam and Test with their own route
        />
        <Route
          path='/exam'
          element={<Exam />} // TODO change naming and split to Exam and Test with their own route
        />
        <Route
          path='/settings'
          element={<Settings />} // TODO change naming and split to Exam and Test with their own route
        />
      </Routes>
    </Flex>
  )
}

export default Pages
