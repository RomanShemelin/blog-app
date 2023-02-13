import { render, screen } from '@testing-library/react'
import { Button, themeButton, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    render(<Button theme={themeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
