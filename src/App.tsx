import './styles.css'
import Routes from '@/Routes'
import { Flex } from '@radix-ui/themes'
import { Header, Footer } from '@/components'

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
