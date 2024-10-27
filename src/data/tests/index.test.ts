import { allQuestions } from '../../data'

// test wrapper to iterate over all questions
const testWrapper = (
  callback: (question: string, answers: string[], correct: string) => void
) => {
  Object.values(allQuestions).forEach((questions) => {
    questions.forEach(({ question, answers, correct }) => {
      callback(question, answers, correct)
    })
  })
}

describe('Questions', () => {
  it('Should contain a question', async () => {
    testWrapper((question, answers, correct) => {
      if (!(question.length > 0)) {
        console.log(`error: ${question}, ${answers}, ${correct}`)
      }
      expect(!!(question && question.length > 0)).toBe(true)
    })
  })
  it('Question should contains placeholder for answer', async () => {
    testWrapper((question) => {
      const placeholder = question && question.includes('_____')
      if (!placeholder) console.log(question)
      expect(placeholder).toBe(true)
    })
  }),
    it('Should have answers', async () => {
      testWrapper((question, answers) => {
        const answer = answers.length > 0
        if (!answer) console.log(question)
        expect(answers.length > 0).toBe(true)
      })
    }),
    it('Solution should be in answers', async () => {
      testWrapper((question, answers, correct) => {
        const solution = answers.includes(correct)
        if (!solution) console.log(question)
        expect(solution).toBe(true)
      })
    }),
    it('Should not have duplicated answers', async () => {
      testWrapper((question, answers) => {
        const count: Record<string, number> = {}
        for (const c of answers) {
          count[c] = (count[c] || 0) + 1
        }
        const duplicated = Object.values(count).some((c) => c > 1)
        if (duplicated) console.log(question)
        expect(duplicated).toBe(false)
      })
    }),
    it('Should have enough placeholder for answers', async () => {
      testWrapper((question, _, correct) => {
        let placeHolders = (question.match(/_____/g) || []).length
        const coma = (question.match(/,/g) || []).length
        placeHolders = -coma
        if (question.startsWith('_____')) {
          placeHolders--
        }
        if (placeHolders > 2) {
          if (placeHolders !== correct.split(' ').length) {
            console.log(question)
            console.log(correct)
          }
          expect(placeHolders).toEqual(correct.split(' ').length)
        }
      })
      let count = 0
      testWrapper(() => {
        count++
      })
      console.log(count)
    })
})
