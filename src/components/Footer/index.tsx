import { Flex, Text } from '@radix-ui/themes'
import { slate } from '@radix-ui/colors'
import { YouTube } from '@/assets'

const Footer: React.FC = () => {
  return (
    <footer>
      <Flex
        as='div'
        align='center'
        justify='between'
        style={{
          backgroundColor: slate.slate1, // Light background
          color: slate.slate12, // Darker text color
          padding: '.5rem',
          width: '100%',
          boxSizing: 'border-box',
          borderTop: `1px solid ${slate.slate6}`, // Subtle border
        }}
      >
        <Flex
          direction='column'
          justify='center'
          flexGrow='1'
        >
          <Text
            as='p'
            style={{ margin: 0 }}
          >
            © 2024 atofrench
          </Text>
          <Text
            as='p'
            style={{ margin: 0 }}
          >
            Contact us at info@atofrench.com
          </Text>
        </Flex>

        <Flex
          as='div'
          gap='1rem'
        >
          <a
            href='https://www.youtube.com/@Chiasekinhnghiem-je5ys'
            target='_blank'
            style={{ color: 'inherit', textDecoration: 'none' }}
            rel='noreferrer'
          >
            <img
              src={YouTube}
              alt='YouTubeLogo'
              width='100px'
              height='33px'
            />
          </a>
          {/* <a
            href='https://github.com'
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com'
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            LinkedIn

          </a> */}
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
