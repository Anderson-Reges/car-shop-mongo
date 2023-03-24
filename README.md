# Car-shop é um API que manipula um banco de dados NoSQL, desenvolvido durante meus estudos na [Trybe](https://www.betrybe.com/)

## 👨‍💻 O que foi ser desenvolvido
O car-shop é uma API com CRUD usando os principios Programação Orientada a Objetos (`POO`) para gerencia uma concessionária de veículos.

## Técnologias usadas

<a href="https://www.typescriptlang.org/" >![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)</a>
<a href="https://www.mongodb.com/pt-br" >![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)</a>
<a href="https://mochajs.org/" >![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)</a>
<a href="https://www.chaijs.com/" >![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)</a>

## Instalando Dependências


> :information_source: Use o comando `docker-compose up -d`.

 Esse comando ira inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
 
> :information_source: Use o comando `docker exec -it car_shop bash`.

 Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

## Executando aplicação

```bash
npm run dev
```
> :information_source: Esse comando ira rodar o server a qual ira conectara o banco de dados que esta no container .

## Executando Testes

  ```
    npm run test:mocha
  ```
  > Para executar os testes de cobertura:
  ```
    npm run test:coverage
  ```
  
