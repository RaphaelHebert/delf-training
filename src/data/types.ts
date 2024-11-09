export type qcm = {
  question: string
  answers: string[]
  correct: string
}

export type text = {
  text: string
  questions: qcm[]
}

export type allQuestionsType = {
  qcm: qcm[]
  text: text[]
}

export type levelName = 'A1' | 'A2' | 'B1' | 'B2'
