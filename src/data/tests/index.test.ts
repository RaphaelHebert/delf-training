import { allQuestions } from '../../data'

describe('Questions', () => {
  it('Should not have duplicated answers', async () => {
    Object.entries(allQuestions).forEach(([key, questions]) => {
      console.log('testing level:', key)
      questions.forEach(({ question, answers, correct }) => {
        // Should contain a question
        const c = question && question.length > 0
        if (!c) console.log(question, answers, correct)
        expect(c).toBe(true)
        // Question should contains placeholder for answer
        const placeholder = question.includes('_____')
        if (!placeholder) console.log(question)
        expect(placeholder).toBe(true)
        // Should have answers
        const answer = answers.length > 0
        if (!answer) console.log(question)
        expect(answers.length > 0).toBe(true)
        // solution should be in answers
        const solution = answers.includes(correct)
        if (!solution) console.log(question)
        expect(solution).toBe(true)
        // Should not have duplicated answers
        const count: Record<string, number> = {}
        for (const c of answers) {
          count[c] = (count[c] || 0) + 1
        }
        const duplicated = Object.values(count).some((c) => c > 1)
        if (duplicated) console.log(question)
        expect(duplicated).toBe(false)
      })
    })
  })
})
