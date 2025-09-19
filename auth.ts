//devemos fazer esta verificação separada do middleware porque a função bcrypt não é compatível com o Next.js middleware, apenas com o Node.js

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import {z} from 'zod'
import type { User } from "@/lib/types";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";


async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                //verificando as credenciais
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);
 
                if (parsedCredentials.success) {
                    //procurando o usuário no DB
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (user == null) return null;
                    //comparando a senha
                    const passwordsMatch = await bcrypt.compare(password, user.password);
 
                    if (passwordsMatch) return user;
                }
                console.log("Invalid credentials")
                return null
            },
        }),
    ],//aqui podemos escolher outros, como email, gmail, github, etc...
})