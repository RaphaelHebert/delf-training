import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

vi.mock('@/pages/Welcome', () => ({
  default: () => {
    return <div>Welcome</div>
  },
}))

describe('Renders main page correctly', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render the page correctly', async () => {
    await render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const home = await screen.queryByText('Welcome')

    expect(home).toBeInTheDocument()
  })
})
