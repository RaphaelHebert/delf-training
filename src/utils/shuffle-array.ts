import { qcm, text } from '@/data/types'

export const shuffle = <T>(array: T[]): T[] => {
  const copy = [...array]
  let currentIndex = copy.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex],
      copy[currentIndex],
    ]
  }

  return copy
}

export const shuffleAnswers = (questions: qcm[]): qcm[] => {
  const copy = [...questions]
  return copy.map((question) => ({
    ...question,
    answers: shuffle(question.answers),
  }))
}

export const shuffleTextQuestions = (texts: text[]): text[] => {
  const copy = [...texts]
  return shuffle(
    copy.map(({ text, questions }) => ({
      text,
      questions: shuffle(shuffleAnswers(questions)),
    }))
  )
}
