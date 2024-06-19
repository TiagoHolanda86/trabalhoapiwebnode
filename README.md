# API Node.js com Sequelize para Plataforma de Financiamento Coletivo

Este repositório contém uma API RESTful construída com Node.js, Sequelize e Express, projetadas para alimentar uma plataforma de financiamento coletivo. A API oferece funcionalidades CRUD completas para gerenciar seus recursos.

## API de Financiamento Coletivo

- Permite a criação de projetos com metas de arrecadação, descrições detalhadas e data de finalização.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Sequelize:** ORM (Object-Relational Mapper) para Node.js que facilita a interação com bancos de dados relacionais.
- **Express:** Framework web minimalista para Node.js que simplifica a criação de APIs RESTful.
- **MySQL:** Banco de dados relacional utilizado para armazenar os dados das plataformas.

## Rotas da API de Financiamento Coletivo

Este guia detalha as rotas disponíveis na API de Financiamento Coletivo, seus métodos HTTP e suas funcionalidades.

**Rotas Principais:**

| Método HTTP | Rota                   | Descrição                                       |
| ----------- | ---------------------- | --------------------------------------------- |
| GET         | `/`                    | Retorna uma mensagem de boas-vindas.             |
| GET         | `/projeto`            | Lista todos os projetos.                        |
| GET         | `/projeto/:id`        | Exibe detalhes de um projeto específico.         |
| POST        | `/projeto`            | Cria um novo projeto.                            |
| PUT         | `/projeto/:id`        | Atualiza os dados de um projeto existente.       |
| DELETE      | `/projeto/:id`        | Exclui um projeto.                             |
| GET         | `/apoiador`           | Lista todos os apoiadores.                       |
| GET         | `/apoiador/:id`       | Exibe detalhes de um apoiador específico.        |
| POST        | `/apoiador`           | Cria um novo apoiador.                           |
| PUT         | `/apoiador/:id`       | Atualiza os dados de um apoiador existente.      |
| DELETE      | `/apoiador/:id`       | Exclui um apoiador.                            |

**Tratamento de Erros:**

- Qualquer rota não mapeada explicitamente resultará em um erro 404, direcionando o usuário para um arquivo HTML de erro 404 (`public/404.html`).

**Controllers:**

- `ProjetoController`: Lida com as operações CRUD (Criar, Ler, Atualizar, Excluir) relacionadas aos projetos.
- `ApoiadorController`: Lida com as operações CRUD relacionadas aos apoiadores.