"use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// Não sei o que faremos com o zod por enquanto

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
//import { useFormStatus } from "react-dom"
import { Label } from "@radix-ui/react-label"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { fakeCreateUser, FormState } from "@/lib/action"
import Image from "next/image"
import { useActionState } from "react"
// import { ... } from "toast"

// Componente separado para o botão, para que ele possa usar useFormStatus
// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button className="m-4" type="submit" disabled={pending}>
//       {pending ? 'Enviando...' : 'Enviar'}
//     </Button>
//   );
// }

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
  const initialState: FormState = { message: '' };
  const [errorMessage, formAction, isPending] = useActionState(fakeCreateUser, initialState);

  return (
    // Passamos a 'formAction' retornada pelo hook para o formulário
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" >
                  <Image alt="imagem de logo 1" src={"/vercel.svg"} width={24} height={24}/>
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <Image alt="imagem de logo 2" src={"/vercel.svg"} width={24} height={24}/>
                  Login with Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="userName">userName</Label>
                  <Input
                    id="userName"
                    type="userName"
                    name="userName"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                {errorMessage.errors?.userName && (
                    <p data-testid="errorResult" className="text-sm font-medium text-red-500 mt-2">
                    {errorMessage.errors.userName[0]}
                    </p>
                )}
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" 
                    type="password" 
                    name="password"
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
          {errorMessage.message && !errorMessage.errors && (
            <p data-testid="result" className="text-sm font-medium text-green-500">{errorMessage.message}</p>
          )}
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

