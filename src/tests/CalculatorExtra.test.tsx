import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Calculadora - Casos adicionales', () => {
    it('no permite más de un punto decimal', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-1'))
        await user.click(screen.getByTestId('btn-.'))
        await user.click(screen.getByTestId('btn-2'))
        await user.click(screen.getByTestId('btn-.'))
        expect(screen.getByTestId('display')).toHaveTextContent('1.2')
    })

    it('el botón +/- convierte el número a negativo y de vuelta a positivo', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-5'))
        await user.click(screen.getByTestId('btn-+/-'))
        expect(screen.getByTestId('display')).toHaveTextContent('-5')
        await user.click(screen.getByTestId('btn-+/-'))
        expect(screen.getByTestId('display')).toHaveTextContent('5')
    })

    it('el botón +/- no permite más de 9 caracteres', async () => {
        render(<App />)
        const user = userEvent.setup()
        for (let i = 0; i < 9; i++) await user.click(screen.getByTestId('btn-9'))
        await user.click(screen.getByTestId('btn-+/-'))
        expect(screen.getByTestId('display').textContent?.length).toBe(9)
    })

    it('operaciones encadenadas muestran el resultado parcial', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-2'))
        await user.click(screen.getByTestId('btn-+'))
        await user.click(screen.getByTestId('btn-3'))
        await user.click(screen.getByTestId('btn-*'))
        expect(screen.getByTestId('display')).toHaveTextContent('5')
        await user.click(screen.getByTestId('btn-4'))
        await user.click(screen.getByTestId('btn-='))
        expect(screen.getByTestId('display')).toHaveTextContent('20')
    })

    it('division por cero muestra ERROR', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-8'))
        await user.click(screen.getByTestId('btn-/'))
        await user.click(screen.getByTestId('btn-0'))
        await user.click(screen.getByTestId('btn-='))
        expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
    })

    it('modulo por cero muestra ERROR', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-8'))
        await user.click(screen.getByTestId('btn-%'))
        await user.click(screen.getByTestId('btn-0'))
        await user.click(screen.getByTestId('btn-='))
        expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
    })

    it('no permite ingresar números despues de ERROR hasta presionar C', async () => {
        render(<App />)
        const user = userEvent.setup()
        // Provoca un error
        await user.click(screen.getByTestId('btn-2'))
        await user.click(screen.getByTestId('btn--'))
        await user.click(screen.getByTestId('btn-3'))
        await user.click(screen.getByTestId('btn-='))
        expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
        // Intenta ingresar un número
        await user.click(screen.getByTestId('btn-1'))
        expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
        // Ahora limpia
        await user.click(screen.getByTestId('btn-C'))
        expect(screen.getByTestId('display')).toHaveTextContent('0')
        // Ahora sí puede ingresar números
        await user.click(screen.getByTestId('btn-7'))
        expect(screen.getByTestId('display')).toHaveTextContent('7')
    })

    it('el display nunca muestra más de 9 caracteres, incluso con decimales', async () => {
        render(<App />)
        const user = userEvent.setup()
        // 12345678.9 (9 caracteres)
        for (const d of '12345678') await user.click(screen.getByTestId(`btn-${d}`))
        await user.click(screen.getByTestId('btn-.'))
        await user.click(screen.getByTestId('btn-9'))
        expect(screen.getByTestId('display').textContent?.length).toBe(9)
        // Intenta agregar otro número
        await user.click(screen.getByTestId('btn-1'))
        expect(screen.getByTestId('display').textContent?.length).toBe(9)
    })

    it('puede hacer operaciones con decimales', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-1'))
        await user.click(screen.getByTestId('btn-.'))
        await user.click(screen.getByTestId('btn-5'))
        await user.click(screen.getByTestId('btn-+'))
        await user.click(screen.getByTestId('btn-2'))
        await user.click(screen.getByTestId('btn-.'))
        await user.click(screen.getByTestId('btn-5'))
        await user.click(screen.getByTestId('btn-='))
        expect(screen.getByTestId('display')).toHaveTextContent('4')
    })

    it('puede hacer operaciones con resultado decimal', async () => {
        render(<App />)
        const user = userEvent.setup()
        await user.click(screen.getByTestId('btn-7'))
        await user.click(screen.getByTestId('btn-/'))
        await user.click(screen.getByTestId('btn-2'))
        await user.click(screen.getByTestId('btn-='))
        // El resultado debe ser 3.5
        expect(screen.getByTestId('display')).toHaveTextContent('3.5')
    })
})