Este repositório reúne exemplos práticos da disciplina **Fundamentos de computação e algoritmos**, no contexto do curso de **Desenvolvimento Full Stack (PUCRS)**.


## 🎯 Objetivo
- Aplicar as práticas aprendidas em curso.


## 📁 Estrutura
- Pasta cypress, com as configurações básicas do mesmo.
- .dockeringnore - usado para o docker ignorar arquivos.
- .gitignore - usado para o git ignorar arquivos.
- cloudbuild.yaml - Este arquivo define o pipeline do Google Cloud Build (o que rodar e em que ordem). apenas ilustrativo.
- cypress.config.js - configurações do Cypress
- Dockerfile - Instruções de montagem do container no docker
- docker-compose.yml - instruções de como rodar os containers juntos.
- init.sql - arquivo sql para criação da tabela para uso simples na básica aplicação.
- index.js - arquivo de aplicação
- .env - aquivos com variáveis de ambiente.
- Um `README.md` explicando a estrutura

OBS - .env esta indo junto somente para validação.

## Método de execução e Comandos docker


```bash

EXECUÇÃO
- Buildar no docker o container: 
docker compose up --build -d
- Caso precise excluir os container: 
docker compose down -v 

http://localhost:3005/
http://localhost:3005/data
http://localhost:3005/welcome
http://localhost:3005/cool

DOCKER
- Se quiser instalar nova biblioteca no container: 
docker compose exec api sh
-  Comando para instalação da nova biblioteca: 
npm install express
-  Comando para sair do container: 
Exit

```