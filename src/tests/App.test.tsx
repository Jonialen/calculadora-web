import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Calculadora', () => {
  it('muestra 0 al inicio', () => {
    render(<App />)
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })

  it('concatena numeros hasta 9 digitos', async () => {
    render(<App />)
    const user = userEvent.setup()
    for (let i = 1; i <= 9; i++) {
      await user.click(screen.getByTestId(`btn-${i % 10}`))
    }
    expect(screen.getByTestId('display').textContent?.length).toBe(9)
  })

  it('ignora el decimo digito', async () => {
    render(<App />)
    const user = userEvent.setup()
    for (let i = 1; i <= 10; i++) {
      await user.click(screen.getByTestId(`btn-${i % 10}`))
    }
    expect(screen.getByTestId('display').textContent?.length).toBe(9)
  })

  it('suma correctamente', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-2'))
    await user.click(screen.getByTestId('btn-+'))
    await user.click(screen.getByTestId('btn-3'))
    await user.click(screen.getByTestId('btn-='))
    expect(screen.getByTestId('display')).toHaveTextContent('5')
  })

  it('muestra ERROR si el resultado es negativo', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-2'))
    await user.click(screen.getByTestId('btn--'))
    await user.click(screen.getByTestId('btn-3'))
    await user.click(screen.getByTestId('btn-='))
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('muestra ERROR si el resultado es mayor a 999999999', async () => {
    render(<App />)
    const user = userEvent.setup()
    for (let i = 0; i < 9; i++) await user.click(screen.getByTestId('btn-9'))
    await user.click(screen.getByTestId('btn-+'))
    await user.click(screen.getByTestId('btn-1'))
    await user.click(screen.getByTestId('btn-='))
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('limpia el display con C', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-5'))
    await user.click(screen.getByTestId('btn-C'))
    expect(screen.getByTestId('display')).toHaveTextContent('0')
  })

  it('soporta el punto decimal', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-1'))
    await user.click(screen.getByTestId('btn-.'))
    await user.click(screen.getByTestId('btn-2'))
    expect(screen.getByTestId('display')).toHaveTextContent('1.2')
  })

  it('soporta la division', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-8'))
    await user.click(screen.getByTestId('btn-/'))
    await user.click(screen.getByTestId('btn-2'))
    await user.click(screen.getByTestId('btn-='))
    expect(screen.getByTestId('display')).toHaveTextContent('4')
  })

  it('soporta el modulo', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByTestId('btn-7'))
    await user.click(screen.getByTestId('btn-%'))
    await user.click(screen.getByTestId('btn-3'))
    await user.click(screen.getByTestId('btn-='))
    expect(screen.getByTestId('display')).toHaveTextContent('1')
  })
})