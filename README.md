# Aplicação dockerizada
- Docker-compose.yml;
- Diretório da aplicação (/app)

# Aplicação dockerizada
- Configurações e comando para executar em modo desenvolvimento:
  - Clone projeto
  - Acesse o diretorio do projeto
  - Execute docker compose up -d ou docker-compose up -d
  - Execute o comando docker exec -it nodeapp bash
  - Execute o seguinte comandos:
    - npm install
    - npx prisma migrate dev
    - npm run start:dev   
