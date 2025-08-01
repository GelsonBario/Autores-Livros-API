# API de Livros e Autores

Uma API REST simples construída com Node.js, Express e TypeScript para gerenciar uma coleção de livros e seus autores. O projeto utiliza uma arquitetura em camadas (Controller, Service, Repository) e usa arquivos JSON como banco de dados persistente.

## ✨ Funcionalidades

-   **Gerenciamento de Livros**: Operações CRUD completas (Criar, Ler, Atualizar, Deletar) para livros.
-   **Consulta de Autores**: Listagem de todos os autores disponíveis.
-   **Persistência de Dados**: As alterações são salvas diretamente nos arquivos `books.json` e `authors.json`, persistindo os dados entre as reinicializações do servidor.
-   **Estrutura Organizada**: O código é dividido em camadas de responsabilidade:
    -   **Controllers**: Gerenciam as requisições e respostas HTTP.
    -   **Services**: Contêm a lógica de negócio da aplicação.
    -   **Repositories**: Responsáveis pelo acesso e manipulação dos dados.

## 💻 Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [tsx](https://github.com/esbuild-kit/tsx): Um executor de TypeScript para Node.js rápido, usado para desenvolvimento.
-   [tsup](https://tsup.egoist.dev/): Usado para "compilar" o código TypeScript para JavaScript para produção.
-   [Cors](https://www.npmjs.com/package/cors): Para habilitar o Cross-Origin Resource Sharing.

## 🚀 Como Começar

Siga as instruções abaixo para executar o projeto localmente.

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm ou yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DO_DIRETORIO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a porta em que o servidor será executado.
    ```
    PORT=3001
    ```

### Executando a Aplicação

-   **Para desenvolvimento (com hot-reload):**
    O servidor irá reiniciar automaticamente a cada alteração nos arquivos.
    ```bash
    npm run start:watch
    ```

-   **Para produção:**
    Este comando irá primeiro compilar o código para a pasta `dist/` e depois executá-lo.
    ```bash
    npm run start:dist
    ```

Após iniciar, o servidor estará disponível em `http://localhost:3001`.

##  endpoints da API

Todos os endpoints são prefixados com `/api`.

---

### Livros (`/books`)

| Método | Endpoint          | Descrição                                 | Corpo da Requisição (Exemplo)                                | Resposta de Sucesso (Exemplo)                                  |
| :----- | :---------------- | :---------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------- |
| `GET`    | `/books`          | Lista todos os livros.                    | N/A                                                          | `[{ "id": 1, "title": "The Hobbit", ... }]`                    |
| `GET`    | `/books/:id`      | Busca um livro específico pelo seu ID.    | N/A                                                          | `{ "id": 1, "title": "The Hobbit", ... }`                      |
| `POST`   | `/books`          | Cria um novo livro.                       | `{ "title": "New Book", "authorId": 1, "pages": 100, ... }` | `{ "id": 4, "title": "New Book", ... }`                        |
| `PATCH`  | `/books/:id`      | Atualiza parcialmente um livro existente. | `{ "pages": 150 }`                                           | `{ "id": 4, "title": "New Book", "pages": 150, ... }`          |
| `DELETE` | `/books/:id`      | Deleta um livro pelo seu ID.              | N/A                                                          | `{ "message": "Book with id 4 deleted." }`                     |

---

### Autores (`/authors`)

| Método | Endpoint  | Descrição             | Resposta de Sucesso (Exemplo)                            |
| :----- | :-------- | :-------------------- | :------------------------------------------------------- |
| `GET`    | `/authors`  | Lista todos os autores. | `[{ "id": 1, "name": "J.R.R. Tolkien", ... }]` |

### Progeto feito com a orientação do Felipão da DIO
