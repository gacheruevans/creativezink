import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders launching text', () => {
    render( <Home />)
    screen.getByText(/^We are launching soon please stay tuned!$/)
    screen.getByText(/^new content will automatically load$/)
  })
  it('renders content text', () => {
    render( <Home />)
    screen.getByText(/^new content will automatically load$/)
  })
})
