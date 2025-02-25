import { Flex, Text } from '@radix-ui/themes'

import { YouTube } from '@/assets'

import './styles.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <Flex
        align='center'
        justify='between'
        className='footer'
      >
        <Flex
          direction='column'
          justify='center'
          flexGrow='1'
        >
          <Text as='p'>© 2024 atofrench</Text>
          <Text as='p'>info@atofrench.com</Text>
        </Flex>

        <Flex
          as='div'
          gap='1rem'
          pr='2'
        >
          <a
            href='https://www.youtube.com/@atofrench'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={YouTube}
              alt='YouTubeLogo'
              width='80px'
              height='25px'
            />
          </a>
          {/* TODO put more link linkedin etc */}
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
