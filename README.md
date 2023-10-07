## Projeto de Encurtador de URLs

Este projeto foi criado para demonstrar os conhecimentos adquiridos na unidade 3.

### Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- MongoDB
- Docker

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas e dependências instaladas antes de executar o projeto:

- **Node.js:** Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

- **Yarn ou npm:** Você pode usar o Yarn ou npm para gerenciar as dependências do projeto.

- **TypeScript:** Instale o TypeScript para executar o projeto e realizar compilações.

- **MongoDB:** É necessário ter um servidor MongoDB em execução ou uma instância MongoDB configurada.

- **Docker:** Você precisará do Docker para usar um contêiner Docker para o banco de dados.

## Instalação

Siga estas etapas para configurar e executar o projeto:

1. Clone o repositório:

   ```bash
   git clone https://github.com/Mlluiz39/url-shortener
   cd url-shortener

Instale as dependências:

Se você estiver usando o Yarn:

yarn

Se você estiver usando o npm:

npm install
## Uso
Para iniciar o servidor, execute o seguinte comando:

npm run dev
### ou
yarn dev

O servidor estará em execução em http://localhost:3000.

## Rotas da API
POST /shorten: Encurta uma URL longa.

GET /:hash: Redireciona para a URL original correspondente à URL curta.

GET /: Retorna todas as URLs encurtadas.

GET /url/:id: Retorna uma URL encurtada com base no ID.

GET /urls/:date: Retorna URLs encurtadas com base na data.


### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests).


### Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.


