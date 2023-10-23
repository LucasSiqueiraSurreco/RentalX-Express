# RentalX Documentation

## Endpoints

### Categorias

- **POST /categories**: Este endpoint é usado para criar uma nova categoria. Ele aceita um objeto JSON no corpo da solicitação com as propriedades "name" e "description".
- **GET /categories**: Este endpoint é usado para listar todas as categorias.
- **POST /categories/import**: Este endpoint é usado para fazer upload de uma nova categoria.

### Sessões

- **POST /sessions**: Este endpoint é usado para autenticar um usuário. Ele aceita um objeto JSON no corpo da solicitação com as propriedades "email" e "password".

### Carros

- **POST /cars**: Este endpoint é usado para criar um novo carro. Ele aceita um objeto JSON no corpo da solicitação com as propriedades "name", "description", "daily_rate", "license_plate", "fine_amount", "brand" e "category_id".
- **POST /cars/images/{id}**: Este endpoint é usado para fazer upload de imagens.

### Especificações

- **POST /specifications**: Este endpoint é usado para criar uma nova especificação. Ele aceita um objeto JSON no corpo da solicitação com as propriedades "name" e "description".

## Definições

- **Specification**: Objeto com as propriedades "name" e "description".
- **Car**: Objeto com as propriedades "name", "description", "daily_rate", "license_plate", "fine_amount", "brand" e "category_id".

## Segurança

A autenticação é feita através do esquema bearer, utilizando JWT.

## Descrição

O projeto RentalX é uma aplicação back-end desenvolvida em Node.js com TypeScript e Express. Ele foi projetado para fornecer uma API robusta e eficiente para um serviço de aluguel de veículos.

A API permite aos usuários interagir com várias entidades, incluindo carros e categorias. Os usuários podem criar novas categorias, listar todas as categorias existentes e fazer upload de novas categorias. Além disso, os usuários podem autenticar-se na aplicação, criar novos carros e fazer upload de imagens para os carros.

O projeto utiliza várias bibliotecas e ferramentas para melhorar a qualidade do código e a eficiência do desenvolvimento. Isso inclui o uso de `@types/uuid` para geração de IDs únicos, `csv-parse` para análise de dados CSV, `multer` para manipulação de upload de arquivos e `swagger-ui-express` para documentação da API.

Além disso, o projeto segue as melhores práticas de desenvolvimento, incluindo o uso de ESLint para linting do código, Prettier para formatação do código e ts-node-dev para melhor experiência de desenvolvimento.

Em resumo, o projeto 2ts é uma solução completa para qualquer serviço de aluguel de veículos que busca uma API back-end confiável e eficiente.

## Scripts

- `dev`: Este script inicia o servidor em modo de desenvolvimento usando ts-node-dev.

## Dependências

- `@types/uuid`: ^9.0.6
- `csv-parse`: ^5.5.2
- `express`: ^4.18.2
- `multer`: ^1.4.5-lts.1
- `swagger-ui-express`: ^5.0.0
- `uuid`: ^9.0.1

## Dependências de Desenvolvimento

- `@types/express`: ^4.17.20
- `@types/multer`: ^1.4.9
- `@types/swagger-ui-express`: ^4.1.5
- `@typescript-eslint/eslint-plugin`: ^6.8.0
- `@typescript-eslint/parser`: ^6.8.0
- `eslint`: ^8.51.0
- `eslint-config-prettier`: ^9.0.0
- `eslint-plugin-prettier`: ^5.0.1
- `prettier`: ^3.0.3
- `ts-node-dev`: ^2.0.0
- `typescript`: ^5.2.2

