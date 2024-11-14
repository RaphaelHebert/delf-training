import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ExerciseCard from '../../ExerciseCard'

// Test Props
const mockProps = {
  qcm: {
    question: 'What is the capital of France?',
    answers: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correct: 'Paris',
  },
  sendSummary: vi.fn(),
}

describe('ExerciseCard Component', () => {
  it('renders the component with provided props', () => {
    render(<ExerciseCard {...mockProps} />)

    expect(
      screen.getByText('What is the capital of France?')
    ).toBeInTheDocument()

    // Check that all answers are rendered
    mockProps.qcm.answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeInTheDocument()
    })
  })

  it('selects an answer and checks if it is highlighted', () => {
    render(<ExerciseCard {...mockProps} />)

    const answerButton = screen.getByText('Berlin')
    fireEvent.click(answerButton)

    // Check that the selected answer has the correct variant and color
    expect(answerButton).toHaveAttribute('data-accent-color', 'mint') // COLOR_SUCCESS
    expect(answerButton).toHaveClass('rt-variant-surface')
  })

  it('displays the correct icon after submitting an incorrect answer', () => {
    render(<ExerciseCard {...mockProps} />)

    // Select an incorrect answer
    const incorrectAnswerButton = screen.getByText('Berlin')
    fireEvent.click(incorrectAnswerButton)

    // Submit the form
    const submitButton = screen.getByText('Check')
    fireEvent.click(submitButton)

    // Check for Cross2Icon indicating incorrect answer
    expect(screen.getByTestId('cross-icon')).toBeInTheDocument()
  })

  it('displays the correct icon after submitting a correct answer', () => {
    render(<ExerciseCard {...mockProps} />)

    // Select the correct answer
    const correctAnswerButton = screen.getByText('Paris')
    fireEvent.click(correctAnswerButton)

    // Submit the form
    const submitButton = screen.getByText('Check')
    fireEvent.click(submitButton)

    // Check for CheckIcon indicating correct answer
    expect(screen.getByTestId('check-icon')).toBeInTheDocument()
  })

  it('resets the form after submitting and clicking Next', () => {
    render(<ExerciseCard {...mockProps} />)

    // Select an answer and submit
    const correctAnswerButton = screen.getByText('Paris')
    fireEvent.click(correctAnswerButton)
    const submitButton = screen.getByText('Check')
    fireEvent.click(submitButton)

    // Click "Next" to reset the form
    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)

    // Ensure form is reset
    expect(screen.getByText('Check')).toBeInTheDocument()
    mockProps.qcm.answers.forEach((answer) => {
      const button = screen.getByText(answer)
      expect(button).toHaveAttribute('data-accent-color', 'gray')
    })
  })

  it('calls sendSummary with correct parameter for right answer after submission', () => {
    render(<ExerciseCard {...mockProps} />)

    // Select the correct answer and submit
    const correctAnswerButton = screen.getByText('Paris')
    fireEvent.click(correctAnswerButton)
    const submitButton = screen.getByText('Check')
    fireEvent.click(submitButton)
    const nextButton = screen.getByText('Next')

    fireEvent.click(nextButton)

    expect(mockProps.sendSummary).toHaveBeenCalledWith(true, false)
  })
  it('calls sendSummary with correct for wrong answer parameter after submission', () => {
    render(<ExerciseCard {...mockProps} />)

    // Select a wrong answer and submit
    const correctAnswerButton = screen.getByText('Berlin')
    fireEvent.click(correctAnswerButton)
    const submitButton = screen.getByText('Check')
    fireEvent.click(submitButton)
    const nextButton = screen.getByText('Next')

    fireEvent.click(nextButton)

    expect(mockProps.sendSummary).toHaveBeenCalledWith(false, false)
  })
})
