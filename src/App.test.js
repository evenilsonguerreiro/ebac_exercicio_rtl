import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Teste para o componente principal', () => {
    test('deve renderizar corretamente', () => {
        render(<App />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    test('deve adicionar "muito massa" nos comentarios', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target:{
                value: 'muito massa'
            }
        })
        fireEvent.click(screen.getByTestId('btn-Comentar'))
        expect(screen.getByText('muito massa')).toBeInTheDocument()
    })
    
}) 
test('deve adicionar "muito top show" nos comentarios', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-comentario'),{
        target:{
            value: 'muito top show'
        }
    })
    fireEvent.click(screen.getByTestId('btn-Comentar'))
    expect(screen.getByText('muito top show')).toBeInTheDocument()
})


