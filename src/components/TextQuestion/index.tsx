import { useEffect, useState } from 'react'

import { text } from '@/data/types'
import { ResponsiveCard } from '@/components'

import Header from './Header'
import Body from './Body'

type Props = {
  exercise: text
  nextQuestion: () => void
}

const TextQuestion: React.FC<Props> = ({ exercise, nextQuestion }) => {
  // show text or questions
  const [text, setText] = useState(true)

  useEffect(() => {
    setText(true)
  }, [exercise])

  return (
    <ResponsiveCard
      header={
        <Header
          text={text}
          setText={setText}
        />
      }
    >
      <Body
        text={text}
        exercise={exercise}
        setText={setText}
        nextQuestion={nextQuestion}
      />
    </ResponsiveCard>
  )
}

export default TextQuestion
