---
sidebar_position: 8
---

# DB de Desenvolvimento

O banco de dados utilizado para desenvolvimento foi o [PGlite](https://pglite.dev/), uma mistura entre PostgreSQL e SQLite, saiba mais sobre [PGlite no Prisma](https://www.prisma.io/docs/postgres/database/local-development).

**ATENÇÃO:** Você **NÃO** pode parar o PGlite que está rodando no terminal, então, para prosseguir com os demais comandos **ABRA OUTRO TERMINAL** 

Para executar o PGlite:
```Bash
pnpm dlx prisma dev
```
Logo em seguida `h` para visualizar a url de conexão com o BD PGlite.

## Possíveis outros BDs

Seria utilizado o [PostgreSQL](https://www.postgresql.org/) tradicional para isso, porém o PGlite demonstrava ser mais apropriado para o Prisma ORM.
Além disso **imagens [docker](https://www.docker.com/)** poderiam ter sido usadas, contudo seria complexo demais, apesar do projeto utilizar docker para staging e produção, usar o docker para simplismente rodar o projeto em um computador qualquer poderia ser um impecílho para quem quiser clona-lo para testar.