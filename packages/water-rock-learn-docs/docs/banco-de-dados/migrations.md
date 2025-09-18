---
sidebar_position: 4
---

# Migrations

**ATENÇÃO:** As migrations costumam **APAGAR OS DADOS**, por isso, em BD de produção deve se utilizar backups e [scripts de migrations](https://www.prisma.io/docs/guides/data-migration)

As migrations de um banco de dados são muito importantes, elas fazem o versionamento do seu banco de dados, permitindo a volta para versões antigas do banco e também ajuda os desenvolvedores a administrar as versões do banco de dados.
Gere a primeira migration do Prisma ORM executando

```Bash
npx prisma migrate dev --name init
```