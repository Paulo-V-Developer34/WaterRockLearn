---
sidebar_position: 3
---

# Criando Tabelas e Configurando o ORM

Essas etapas são muito simples, mas para configurações mais avançadas vá até o [site oficial](https://www.prisma.io/docs/guides/nextjs)

## Configurando

Foi configurado o cliente e o BD escolhido, observe

```Prisma
generator client {
  provider = "prisma-client-js"
  output   = "../app/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
---
## Criando tabelas

**ATENÇÃO:** Para que o intellisense do Prisma funcione é necessário instalar a extensão do Prisma

Para criar as tabelas simplesmente foi utilizada a sintaxe do Prisma, observe:

```Prisma
model NomeTabela {
  id            Int  @id @default(autoincrement())
  outrosCampos  String
}
```
