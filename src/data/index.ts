import { levelName, allQuestionsType } from '@/data'
import a1 from './questionsA1'
import a2 from './questionsA2'
import b1 from './questionsB1'
import b2 from './questionsB2'
import textA1 from './textsA1'
import textA2 from './textsA2'
import textB1 from './textsB1'
import textB2 from './textsB2'

export { default as a1 } from './questionsA1'
export { default as a2 } from './questionsA1'
export { default as b1 } from './questionsA1'
export { default as b2 } from './questionsA1'

export const allQuestions: Record<levelName, allQuestionsType> = {
  A1: { qcm: a1, text: textA1 },
  A2: { qcm: a2, text: textA2 }, // TODO: create and add textA2
  B1: { qcm: b1, text: textB1 }, // TODO: create and add textB1
  B2: { qcm: b2, text: textB2 }, // TODO: create and add textB2
}

export * from './types.ts'
