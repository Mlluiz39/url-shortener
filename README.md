# Url-shortener
### Projeto de encurtador de url's
Projeto feito para comprovar os conhecimentos adquiridos na unidade 3

# Encurtador de URL

O Encurtador de URL é uma aplicação web simples que permite encurtar URLs longas em URLs curtas. Este projeto é construído usando Node.js, Express.js, MongoDB e Docker.

## Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

- Yarn ou npm: Certifique-se de ter yarn instalado ou faca uso do npm que ja vem no node.

- TypeScript: Instalar typescript para rodar o projeto e fazer o build.

- MongoDB: É necessário ter um servidor MongoDB em execução ou uma instância MongoDB configurada.

- Docker: É necessário ter um container docker instalado para uso do banco de dados.

## Instalação

1. Clone o repositório:

   git clone https://github.com/Mlluiz39/url-shortener

   cd url-shortener

   yarn

   ## Uso

   ### Inicie o servidor:

   npm run dev / yarn dev

   O servidor estará em execução em http://localhost:3000.

Rotas da API:

POST /shorten = Encurta uma URL longa.

GET /:hash = Redireciona para a URL original correspondente à URL curta.

GET / = Retorna todas as URLs encurtadas.

GET /url/:id = Retorna uma URL encurtada com base no ID.

GET /urls/:date = Retorna URLs encurtadas com base na data.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests).

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.









