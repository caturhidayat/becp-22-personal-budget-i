# becp-22-personal-budget-i


## Clone Project 
```
git clone https://github.com/caturhidayat/becp-22-personal-budget-i.git
```

after clone, ``cd becp-22-personal-budget-i``

## Install node_modules
```
npm install
```

## Migrate prisma
```
npx prisma migrate dev --name init
```
* Before your migrate, please run your Database & create database : ``PostgreSQL`` --> Reference 👉🏼   [prisma doc](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres)

## Run App
```
node .
```
