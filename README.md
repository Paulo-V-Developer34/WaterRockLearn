# Water Rock Learn

O Water Rock Learn (**WRL**)é um projeto que visa testar meus conhecimentos do Google Cloud Platform (**GCP**), ele também tem o objetivo de praticar minhas habilidades de programação web

## Como Iniciar O Projeto

Execute os seguintes comandos para inicializar o projeto:

Instalar dependências 
```Bash
pnpm i
```
Executar a seeding do banco de dados para inicia-lo com dados 
```Bash
prisma ...
```
Executar o projeto
```Bash
pnpm dev
```

### Como Iniciar o Docusaurus

utilize o comando a seguir com a flag --filter pois o projeto do docusaurus é um workspace
```Bash
pnpm --filter water-rock-learn-docs docusaurus start
```

## Debug

Dentro do arquivo .vscode/launch.json há os comandos para o debug do Next.js, mas infelizmente apenas o server-side está funcionando por enquanto.

## Tecnologias

As tecnologias utilizadas foram:
- [Next.js](https://nextjs.org/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Zod](https://zod.dev/)
- [Next Auth](https://next-auth.js.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Shadcn Ui](https://ui.shadcn.com/)
- [Testing Library](https://testing-library.com/)
- [Vitest](https://vitest.dev/)
- [Prisma ORM](https://www.prisma.io/orm)
Vale resaltar que as dependencias dessas bibliotecas e do framework não foram citadas, como por exemplo o [React.js](https://pt-br.legacy.reactjs.org/) que é uma dependência do Next.js

Tanto as tecnologias quanto a documentação da criação do projeto estarão melhor explicadas na documentação feita usando Docusaurus, que antigamente estava dentro deste repositorio como um workspace, mas atualmente está no repositório [WaterRockLearnDocs](https://github.com/Paulo-V-Developer34/WaterRockLearnDocs)

## Padrões

- cammelCase para propriedades html, variáveis, funções, atributos e métodos
- PascalCase para classes, namespaces, tipos e componentes
- kebab-case para arquivos e pastas
- SCREAMING_SNAKE_CASE para variáveis de ambiente

## Design de Software

Ele é em boa parte baseado no **SOLID**, todavia possui algumas particularidades

## Considerações Finais

## Possíveis Erros