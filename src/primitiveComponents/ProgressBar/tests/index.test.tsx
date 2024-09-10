import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProgressBar from '../index'

// Mock the Radix Progress component to avoid testing its internal logic.
vi.mock('@radix-ui/react-progress', () => ({
  Root: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Indicator: ({ style }: { style: React.CSSProperties }) => (
    <div
      data-testid='progress-indicator'
      style={style}
    ></div>
  ),
}))

describe('ProgressBar', () => {
  it('renders the component with initial progress', () => {
    render(
      <ProgressBar
        progress={20}
        total={100}
        numeric={true}
      />
    )

    // Assert that the progress text is rendered correctly
    expect(screen.getByText('20 / 100')).toBeInTheDocument()

    // Assert that the progress indicator is at the correct position
    const indicator = screen.getByTestId('progress-indicator')
    expect(indicator).toHaveStyle('transform: translateX(-81%)')
  })

  it('updates progress when props change', () => {
    const { rerender } = render(
      <ProgressBar
        progress={40}
        total={100}
        numeric={true}
      />
    )

    // Assert that initial progress is rendered correctly
    expect(screen.getByText('40 / 100')).toBeInTheDocument()
    const indicator = screen.getByTestId('progress-indicator')
    expect(indicator).toHaveStyle('transform: translateX(-61%)')

    // Re-render the component with updated props
    rerender(
      <ProgressBar
        progress={80}
        total={100}
        numeric={true}
      />
    )

    // Assert that the updated progress is reflected
    expect(screen.getByText('80 / 100')).toBeInTheDocument()
    expect(indicator).toHaveStyle('transform: translateX(-21%)')
  })

  it('renders correctly when progress exceeds total', () => {
    render(
      <ProgressBar
        progress={120}
        total={100}
        numeric={true}
      />
    )

    // Assert that the text reflects overflowed progress
    expect(screen.getByText('120 / 100')).toBeInTheDocument()

    // Assert the progress indicator is fully filled
    const indicator = screen.getByTestId('progress-indicator')
    expect(indicator).toHaveStyle('transform: translateX(-0%)')
  })
})
