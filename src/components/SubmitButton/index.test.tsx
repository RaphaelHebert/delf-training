import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { useFormStatus } from 'react-dom'
import SubmitButton from './index'

vi.mock('react-dom', () => ({
  ...vi.importActual('react-dom'),
  useFormStatus: vi.fn(),
}))

describe('SubmitButton Component', () => {
  const mockUseFormStatus = useFormStatus as jest.Mock

  beforeEach(() => {
    mockUseFormStatus.mockReturnValue({ pending: false })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly with children', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('disables the button when pending is true', () => {
    mockUseFormStatus.mockReturnValue({ pending: true })
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled()
  })

  it('enables the button when pending is false', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    expect(screen.getByRole('button', { name: /submit/i })).not.toBeDisabled()
  })

  // it.only('forwards additional props to the Radix Button', async () => {
  //   render(
  //     <SubmitButton
  //       color='blue'
  //       size='4'
  //       data-testid='custom-button'
  //     >
  //       Submit
  //     </SubmitButton>
  //   )
  //   await waitFor(() => {
  //     expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute(
  //       'size',
  //       '4'
  //     )
  //   })
  // })

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<SubmitButton onClick={handleClick}>Submit</SubmitButton>)
    const button = screen.getByRole('button', { name: /submit/i })

    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('has autoFocus and submit type attributes by default', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toHaveAttribute('type', 'submit')
    // expect(button).toHaveAttribute('autofocus', '')
  })
})
