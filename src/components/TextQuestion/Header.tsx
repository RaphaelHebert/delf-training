import {
  ChevronRightIcon,
  ChevronLeftIcon,
  QuestionMarkIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons'
import { Flex } from '@radix-ui/themes'

import './styles.css'

type HeaderProps = {
  text: boolean
  setText: (isText: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ text, setText }) => {
  return (
    <>
      {!text ? (
        <Flex
          width='100%'
          justify='start'
        >
          <Flex
            align='center'
            className='buttonStyle'
            onClick={() => {
              setText(true)
            }}
          >
            <ChevronLeftIcon
              color={'var(--green-9)'}
              width='40'
              height='40'
              data-testid='chevronLeft-icon'
            />
            <TextAlignJustifyIcon
              color={'var(--green-9)'}
              width='25'
              height='25'
              data-testid='text-icon'
              className='rightButton'
            />
          </Flex>
        </Flex>
      ) : (
        <Flex
          width='100%'
          justify='end'
        >
          <Flex
            align='center'
            className='buttonStyle'
            onClick={() => setText(false)}
          >
            <QuestionMarkIcon
              color={'var(--green-9)'}
              width='25'
              height='25'
              data-testid='questionMark-icon'
              className='leftButton'
            />
            <ChevronRightIcon
              color={'var(--green-9)'}
              width='40'
              height='40'
              data-testid='chevronRightIcon-icon'
            />
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default Header
