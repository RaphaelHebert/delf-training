import ReactGA from 'react-ga4'
import './styles.css'
import Routes from '@/Routes'
import { Flex } from '@radix-ui/themes'
import { Header, Footer } from '@/components'

import './styles.css'
ReactGA.initialize('G-05SL1S3Q77')

function App() {
  return (
    <Flex
      gap='3'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
        overflow: 'hidden',
      }}
      height='100dvh'
      className='mukta-regular'
    >
      <Header />
      <Routes />
      <Footer />
    </Flex>
  )
}
export default App
