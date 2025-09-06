import {screen, render} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { LoginForm } from './login-form'

//fazendo o mock da ation do form
import {fakeCreateUser}  from '@/lib/action'
import { Mock } from 'vitest'
vi.mock('@/lib/action', ()=>({
    fakeCreateUser: vi.fn()
}))

describe('Formulário de login',()=>{
    it('Fazendo login normalmente',async ()=>{
        //simulação do usuário
        const user = userEvent.setup()
        const userName = 'Jhon Doe'

        //Mock para a action do form
        //const mockOnSubmit = vi.fn().mockResolvedValue(undefined)
        //vi.spyOn(actions,'fakeCreateUser').mockImplementation(mockedFakeCreateUser);
        const mockedLoginAction = fakeCreateUser as Mock
        //atribuindo valores quando o nosso mock for chamado
        mockedLoginAction.mockResolvedValue({message: `Usuário "${userName}" logado com sucesso!`})
        render(<LoginForm/>)    //renderizando o componente

        const userNameInput = screen.getByLabelText(/userName/i)    //pegando os elementos do formulário
        const submitButton = screen.getByRole('button', {name: /Enviar/i})
        
        await user.type(userNameInput, userName) //essas funções precisam ser await porque ele simula a demora do usuário 
        await user.click(submitButton)

        const result = screen.getByTestId('result')

        expect(result).toHaveTextContent(`Usuário "${userName}" logado com sucesso!`);
    })
    it('Fazendo login inválido',async ()=>{
        //simulação do usuário
        const user = userEvent.setup()
        const userName = 'Jh'

        //Mock para a action do form
        //const mockOnSubmit = vi.fn().mockResolvedValue(undefined)
        //vi.spyOn(actions,'fakeCreateUser').mockImplementation(mockedFakeCreateUser);
        const mockedLoginAction = fakeCreateUser as Mock
        //atribuindo valores quando o nosso mock for chamado
        mockedLoginAction.mockResolvedValue({
            message: 'Falha na validação do servidor',
            errors: {
                userName: ['userName precisa ter no mínimo 3 caracteres']
            }})
        render(<LoginForm/>)    //renderizando o componente

        const userNameInput = screen.getByLabelText(/userName/i)    //pegando os elementos do formulário
        const submitButton = screen.getByRole('button', {name: /Enviar/i})
        
        await user.type(userNameInput, userName) //essas funções precisam ser await porque ele simula a demora do usuário 
        await user.click(submitButton)
        
        const result = screen.getByTestId('errorResult')

        expect(result).toHaveTextContent(`userName precisa ter no mínimo 3 caracteres`);
    })
})