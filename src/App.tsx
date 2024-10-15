import ReactGA from 'react-ga4'
import './styles.css'
import Routes from '@/Routes'
import { Flex } from '@radix-ui/themes'
import { Header, Footer } from '@/components'

ReactGA.initialize('G-05SL1S3Q77')

function App() {
  return (
    <Flex
      gap='3'
      direction='column'
      style={{
        maxHeight: '100vh',
        height: '100vh',
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
      className='mukta-regular'
    >
      <Header />
      <Routes />
      <Footer />
    </Flex>
  )
}
export default App
