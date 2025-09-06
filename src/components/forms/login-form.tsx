"use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// Não sei o que faremos com o zod por enquanto

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { fakeCreateUser, FormState } from "@/lib/action"
// import { ... } from "toast"

// Componente separado para o botão, para que ele possa usar useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar'}
    </Button>
  );
}

export function LoginForm() {
  const initialState: FormState = { message: '' };
  const [errorMessage, formAction, isPending] = useActionState(fakeCreateUser, initialState);

  return (
    // Passamos a 'formAction' retornada pelo hook para o formulário
    <form action={formAction} className="w-2/3 space-y-4">
      <div>
        <label htmlFor="userName">UserName</label>
        <Input id="userName" name="userName" placeholder="shadcn" />
        {errorMessage.errors?.userName && (
          <p data-testid="errorResult" className="text-sm font-medium text-red-500 mt-2">
            {errorMessage.errors.userName[0]}
          </p>
        )}
      </div>

      <SubmitButton />

      {errorMessage.message && !errorMessage.errors && (
         <p data-testid="result" className="text-sm font-medium text-green-500">{errorMessage.message}</p>
      )}
    </form>
  );
}