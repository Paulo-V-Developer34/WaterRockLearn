import { PrismaClient, Prisma } from "../generated/prisma";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()



const userData = async (): Promise<Prisma.UserCreateInput[]> => {
    const saltrounds = 10
    const password = await bcrypt.hash("wrl123@@",saltrounds)

    return [//caso o tipo não esteja aparecendo é porque a migration ainda não foi executada
        {
            email: "jhondoe@gmail.com",
            name: "Jhon Doe",
            password: password
        },
        {
            email: "jhonnydoe@gmail.com",
            name: "Jhonny Doe",
            password: password
        }
    ]
}

//fazendo o processo de seed
export async function main() {
    const users = await userData()

    for (const u of users){
        await prisma.user.create({data: u})
    }
}

main()