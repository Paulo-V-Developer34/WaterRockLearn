---
sidebar_position: 2
---

# Gerando o banco de dados

**ATENÇÃO:** caso você queira apenas gerar o banco de dados para executar o projeto siga as instruções do README.md do diretório raiz

Para criar o banco de dados com o Prisma ORM neste projeto foram efetuados os seguintes comandos:

Instalando:
```Bash
pnpm add -D prisma
pnpm install @prisma/extension-accelerate @prisma/client #ATENÇÃO: Para qualquer outro banco de dados que não seja o Prisma PostgreSQL você não precisa instalar o @prisma/extension-accelerate
```
---
**ATENÇÃO:** O comando abaixo ainda não gera o cliente, o cliente será gerado a partir da migration

Inicializando:
```Bash
npx prisma init --db --output ../app/generated/prisma
```

Esse comando gera:

- A pasta prisma com o arquivo schema.prisma onde fica os dados do seu banco.
- Um banco de dados Prisma Postgres.
- O arquivo .env contendo a variável DATABASE_URL.
- crie uma pasta de saída para o Prisma Client chamada app/generated/prisma.

Responda as perguntas que aparecerem no terminal!
