# RentalX Documentation
- [Português (PT)](#portuguese-pt)
- [English (EN)](#english-en)

## Português (PT)

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

O projeto RentalX é uma aplicação back-end em Node.js com TypeScript e Express, oferecendo uma API robusta para serviços de aluguel de veículos. 

Os usuários podem interagir com carros e categorias, criando, listando e fazendo upload de categorias, autenticando-se na aplicação, criando carros e enviando imagens. 

O projeto incorpora bibliotecas como @types/uuid, csv-parse, multer, e swagger-ui-express. Segue as melhores práticas de desenvolvimento, utilizando ESLint, Prettier e ts-node-dev para uma experiência de desenvolvimento otimizada.

 Em resumo, o projeto oferece uma solução completa para serviços de aluguel de veículos com uma API back-end confiável e eficiente.

 Feito durante o curso de nodejs da rocketseat.

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

#

## English (EN)


## Endpoints

### Categories

- **POST /categories**: This endpoint is used to create a new category. It accepts a JSON object in the request body with the properties "name" and "description."
- **GET /categories**: This endpoint is used to list all categories.
- **POST /categories/import**: This endpoint is used to upload a new category.

### Sessions

- **POST /sessions**: This endpoint is used to authenticate a user. It accepts a JSON object in the request body with the properties "email" and "password."

### Cars

- **POST /cars**: This endpoint is used to create a new car. It accepts a JSON object in the request body with the properties "name," "description," "daily_rate," "license_plate," "fine_amount," "brand," and "category_id."
- **POST /cars/images/{id}**: This endpoint is used to upload images.

### Specifications

- **POST /specifications**: This endpoint is used to create a new specification. It accepts a JSON object in the request body with the properties "name" and "description."

## Definitions

- **Specification**: Object with properties "name" and "description."
- **Car**: Object with properties "name," "description," "daily_rate," "license_plate," "fine_amount," "brand," and "category_id."

## Security

Authentication is done using the bearer scheme, utilizing JWT.

## Description

The RentalX project is a back-end application in Node.js with TypeScript and Express, offering a robust API for vehicle rental services.

Users can interact with cars and categories, creating, listing, and uploading categories, authenticating in the application, creating cars, and uploading images.

The project incorporates libraries such as @types/uuid, csv-parse, multer, and swagger-ui-express. It follows development best practices, using ESLint, Prettier, and ts-node-dev for an optimized development experience.

In summary, the project provides a comprehensive solution for vehicle rental services with a reliable and efficient back-end API.

Done during the Node.js course at Rocketseat.

## Scripts

- `dev`: This script starts the server in development mode using ts-node-dev.

## Dependencies

- `@types/uuid`: ^9.0.6
- `csv-parse`: ^5.5.2
- `express`: ^4.18.2
- `multer`: ^1.4.5-lts.1
- `swagger-ui-express`: ^5.0.0
- `uuid`: ^9.0.1

## Development Dependencies

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

