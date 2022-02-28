import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Enjoy', () => {
  render(<App />)
  const enjoyText = screen.getByText(/Enjoy!/)
  expect(enjoyText).toBeInTheDocument()
})
