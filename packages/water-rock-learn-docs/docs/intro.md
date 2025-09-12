---
sidebar_position: 1
---

# Introdução

O Water Rock Learn (WRL) foi projetado para ser um programa completo hospedado no Google Cloud com bom desempenho e experiência de usuário através do framework e bibliotecas utilizadas. Para isso foi utilizado o framework [Next.js](https://nextjs.org/) e as seguintes bibliotecas:
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Zod](https://zod.dev/)
- [Next Auth](https://next-auth.js.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Shadcn Ui](https://ui.shadcn.com/)
- [Testing Library](https://testing-library.com/)
- [Vitest](https://vitest.dev/)
- [Prisma ORM](https://www.prisma.io/orm)
Vale resaltar que as dependencias dessas bibliotecas e do framework não foram citadas, como por exemplo o [React.js](https://pt-br.legacy.reactjs.org/) que é uma dependência do Next.js

## Google Cloud

O [Google Cloud Platform (GCP)]("https://cloud.google.com") oferece diversos serviços de nuvem, tanto para hospedar aplicações back-end quanto para treinar modelos de IA.
Neste projeto ele hospedará o servidor Next.js, banco de dados, load balancer e IA caso seja utilizada.

## Bibliotecas e Ferramentas Utilizadas

A explicação da utilização das bibliotecas será organizada da seguinte forma:
- Design (Shadcn Ui e Figma)
- Tipagem (Zod e TypeScript)
- Banco de Dados (Prisma ORM e Google Cloud SQL)
- Segurança (Bcrypt, Next Auth e Cloud Security)
- Notificações (React Hot Toast, Cloud Run Functions e Cloud Pub/Sub)
- Testes (Debbug, Testing Library e Vitest)
- Design Patterns (SOLID, Factory, etc...)
- Planejamento (Draw.io, Diagrama de Caso de Uso, UML, etc...)
- Documentação (TypeDoc, Docusaurus)

## Docusaurus

O docusaurus foi utilizado para realizar documentação técnica (esta que você está vendo agora) do que foi feito no projeto, como por exemplo o processo da criação da seed do banco de dados, todavia ele será mais bem apresentado na seção de planejamento. caso você esteja procurando os comandos para inicializar o projeto WRL e o banco de dados basta ir até o [README]("./devo/colocar/o/link/aqui/depois") do projeto.

### Avisos

A documentação não será feita na ordem e pode demorar um pouco para ser feita, porquanto estou com um prazo apertado para fazer o projeto