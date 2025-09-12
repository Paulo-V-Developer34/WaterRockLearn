/**
 * @fileoverview Ações dos formulários
 * @author Paulo V N Cunha
 * @version 1.0.0
 */

'use server'

export type FormState = {
    message: string,
    errors?: {
        userName: string[]
    }
}

export type CreateUser = {
    name: string,
    password: string
}

/**
 * Método para testar a criação de um usuário
 * @param prevState - cache do formulário
 * @param formData - dados do formulário
 * @returns Resultado da criação
 */
export async function fakeCreateUser(
    prevState: FormState | undefined, //esses tipos devem ser iguais no useActionState
    formData: FormData
) {
    const userName = formData.get('userName') as string

    if (!userName){
        return {
            message: 'Falha na validação do servidor',
            errors: {
                userName: ['userName não conseguiu ser enviado']
            }
        }
    }

    if (userName.length < 3){ //aqui podemos substituir por outra verificação do Zod
        return {
            message: 'Falha na validação do servidor',
            errors: {
                userName: ['userName precisa ter no mínimo 3 caracteres']
            }
        }
    }

    // // Simulação de um erro de negócio
    // if (userName === 'admin') {
    //     return {
    //         message: 'Este nome de usuário não é permitido.',
    //         errors: {
    //             userName: ['"admin" não pode ser usado.'],
    //         },
    //     };
    // }

    console.log('Server Action recebendo:', userName);
    // Lógica para salvar no banco de dados...

    return { message: `Usuário "${userName}" logado com sucesso!` };
}