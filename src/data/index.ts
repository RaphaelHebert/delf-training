import a1 from './questionsA1'
import a2 from './questionsA2'
import b1 from './questionsB1'
import b2 from './questionsB2'

export { default as a1 } from './questionsA1'
export { default as a2 } from './questionsA1'
export { default as b1 } from './questionsA1'
export { default as b2 } from './questionsA1'

export const allQuestions = {
  A1: a1,
  A2: a2,
  B1: b1,
  B2: b2,
}

export * from './types.ts'
