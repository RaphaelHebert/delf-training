import ReactGA from 'react-ga4'
import './styles.css'
import Routes from '@/Routes'
import { Flex } from '@radix-ui/themes'
import { Header, Footer } from '@/components'

import './styles.css'
ReactGA.initialize('G-05SL1S3Q77')

function App() {
  const iubendaConsent = document.getElementsByClassName('iubenda-tp-btn')
  if (iubendaConsent[0] as HTMLDivElement) {
    iubendaConsent[0].classList.remove('iubenda-tp-btn')
    iubendaConsent[0].classList.remove('iubenda-cs-preferences-link')
  }

  return (
    <Flex
      gap='3'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
        overflow: 'hidden',
        zIndex: 2147483647 + 1, // workaround to avoid having iudenda logo on display
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
