/**
 * @fileoverview Ações dos formulários
 * @author Paulo V N Cunha
 * @version 1.0.0
 */

'use server'

import { AuthError } from "next-auth"
import { signIn } from "../../auth";
import { type FormState } from "./types";

async function trySignIn(formData: FormData){
    try {
        console.log("fazendo login")
        const user = await signIn('credentials', formData);
        return user
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                return {
                    message: "Login falhou",
                    errors: {
                        err: ["Email ou senha inválida."]
                    }
                }
                default:
                return {
                    message: "Login falhou",
                    errors: {
                        err: ["Estamos com problemas, tente mais tarde."]
                    }
                }
            }
        }
        throw error;
    }
}

/**
 * Método para testar a criação de um usuário
 * @param prevState - cache do formulário
 * @param formData - dados do formulário
 * @returns Resultado da criação
 */
export async function login(
    prevState: FormState | undefined, //esses tipos devem ser iguais no useActionState
    formData: FormData
): Promise<FormState | undefined> {
    const user = await trySignIn(formData)
    return user
}