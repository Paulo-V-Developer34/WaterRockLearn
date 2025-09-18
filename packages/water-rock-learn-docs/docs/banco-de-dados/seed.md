---
sidebar_position: 5
---

# Seed

O processo de seed de um banco de dados gera dados automaticamente para popular o banco, para que você não tenha que fazer isso toda vez que seus dados forem apagados ou o projeto for executado em uma nova máquina

## Criando o Código da Seed

Para criar o código da seed do banco foi criado o arquivo `seed.ts` dentro da pasta `prisma` com a seguinte sintaxe
```TypeScript
//conectando com o banco
const prisma = new PrismaClient();

//lembre-se de utilizar a tipagem correta do Prisma
const userData: Prisma.UserCreateInput[] = [
  {
    dados: "da tabela User"
  }
];

//percorrendo o array
export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
```

## Modificando o Package.json

Foi colocado um comando no package.json para executar a seed, sendo
```Json
"prisma": {
    "seed": "tsx prisma/seed.ts"
},
```

## Executando o prisma seed

Para que o comando do package.json seja executado foi executado:
```Bash
pnpm dlx prisma db seed
```