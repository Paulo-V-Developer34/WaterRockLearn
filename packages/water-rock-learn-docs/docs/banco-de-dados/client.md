---
sidebar_position: 7
---

# Client

**ATENÇÃO:** Caso sua aplicação não utilize o Prisma Postgres o 2° código deve ser utilizado

O cliente é necessário para que a aplicação possa se comunicar com o banco de dados, servindo como um intermediário.
O Prisma Cliente foi gerado no arquivo `./src/lib/prisma.ts` com o código:
```TS
import { PrismaClient } from '../app/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```

Caso a aplicação não utilizasse o Prisma Postgres ela deveria conter o código:
```TS
import { PrismaClient } from '../src/app/generated/prisma'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```