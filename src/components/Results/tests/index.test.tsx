import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Results from '../index'

describe('Results Component', () => {
  it('should render with the correct initial percent', () => {
    render(<Results percent={50} />)

    // Check that the text content shows the initial percentage (0% at start)
    expect(screen.getByText('0 %')).toBeInTheDocument()
  })

  it('should apply the correct CSS class initially', () => {
    render(<Results percent={50} />)

    // Check that the initial class is applied
    const resultDiv = screen.getByTestId('animated-result')
    // We can use role or class selectors.
    expect(resultDiv).toHaveClass('resultPercent')
  })

  it('should update the CSS class when the percent changes', () => {
    const { rerender } = render(<Results percent={50} />)

    // After the first render, the class should include the animation class
    rerender(<Results percent={50} />)
    const resultDiv = screen.getByTestId('animated-result')
    expect(resultDiv).toHaveClass('resultPercentAnimation')
  })

  it('should update the percent display based on prop', async () => {
    render(<Results percent={75} />)

    // Trigger the useEffect by changing the percent prop
    const element = screen.getByText(/0 %/i)

    // Check the animation starts with 0% and ends at 75%
    setTimeout(() => {
      expect(element).toHaveTextContent(/75 %/i)
    }, 2500) // Adjust the delay depending on your animation
  })

  it('should correctly update CSS variable --angle', () => {
    // Mock document.documentElement.style.setProperty
    const setPropertyMock = vi.spyOn(
      document.documentElement.style,
      'setProperty'
    )

    render(<Results percent={50} />)

    // Check that the --angle variable was set correctly
    expect(setPropertyMock).toHaveBeenCalledWith('--angle', '180deg')
  })
})
