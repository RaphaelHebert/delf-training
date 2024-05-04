import { render, screen, cleanup } from '@testing-library/react'

import App from './App'

describe('Renders main page correctly', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render the page correctly', async () => {
    await render(<App />)

    const hello = await screen.queryByText('Hello world')

    expect(hello).toBeInTheDocument()
  })
})
