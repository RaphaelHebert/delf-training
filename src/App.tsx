import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Routes from '@/Routes'
import { Flex } from '@radix-ui/themes'
import { Header, Footer } from '@/components'

import './styles.css'

ReactGA.initialize('G-05SL1S3Q77')

function App() {
  // remove iubenda logo and link to RGPD
  useEffect(() => {
    const removeElement = () => {
      const iubendaConsent = document.getElementsByClassName('iubenda-tp-btn')
      try {
        iubendaConsent[0].classList?.remove('iubenda-tp-btn')
        iubendaConsent[0].classList?.remove('iubenda-cs-preferences-link')
      } catch {
        // console.log(err)
      }
    }
    removeElement()
    const observer = new MutationObserver(() => removeElement())

    // Observe changes to the body
    observer.observe(document.body, { childList: true, subtree: true })

    // Clean up the observer on component unmount
    return () => observer.disconnect()
  }, [])

  return (
    <Flex
      gap='3'
      direction='column'
      style={{
        borderLeft: '1px solid lightGrey',
        borderRight: '1px solid lightGrey',
      }}
      height='100dvh'
    >
      <Header />
      <Routes />
      <Footer />
    </Flex>
  )
}
export default App
