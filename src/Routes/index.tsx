import { Routes, Route } from 'react-router-dom'
import { Training, Exam } from '@/pages'
import { TextQuestions } from '@/components'
import { Flex } from '@radix-ui/themes'

function Pages() {
  return (
    <Flex
      justify='center'
      flexGrow='1'
    >
      <Routes>
        <Route
          path='/exam'
          element={<Exam />} // TODO change naming and split to Exam and Test with their own route
        />
        <Route
          path='text-comprehension'
          element={<TextQuestions />} // TODO change naming and split to Exam and Test with their own route
        />
        <Route
          path='/*'
          element={<Training />} // TODO change naming and split to Exam and Test with their own route
        />
      </Routes>
    </Flex>
  )
}

export default Pages
