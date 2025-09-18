import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [//caso o tipo não esteja aparecendo é porque a migration ainda não foi executada
    {
        email: "jhondoe@gmail.com",
        name: "Jhon Doe",
        password: "WRL123@@"
    },
    {
        email: "jhonnydoe@gmail.com",
        name: "Jhonny Doe",
        password: "WRL123@@"
    }
]

//fazendo o processo de seed
export async function main() {
    for (const u of userData){
        await prisma.user.create({data: u})
    }
}

main()