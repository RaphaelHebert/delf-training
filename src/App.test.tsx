import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ModeAndLevelProvider } from './contexts/modeAndLevel'
import { allQuestions } from './data'
import App from './App'

vi.mock('@/pages/Training', () => ({
  default: () => {
    return <div>Training</div>
  },
}))

describe('Renders main page correctly', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render the page correctly', async () => {
    await render(
      <ModeAndLevelProvider
        value={{
          level: { name: 'A1', questions: allQuestions.A1 },
          mode: 'training',
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModeAndLevelProvider>
    )

    const home = await screen.queryByText('Training')

    expect(home).toBeInTheDocument()
  })
})
