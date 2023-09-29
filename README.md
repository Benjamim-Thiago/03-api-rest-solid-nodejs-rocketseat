# Aplicação dockerizada
- Docker-compose.yml;
- Diretório da aplicação (/app)

# Aplicação dockerizada
- ## Configurações e comando para executar em modo desenvolvimento:
  - Clone projeto
  - Acesse o diretorio do projeto
  - Execute docker compose up -d ou docker-compose up -d
  - Execute o comando docker exec -it nodeapp bash
  - Execute o seguinte comandos:
    - npm install
    - npx prisma migrate dev
    - npm run start:dev
- ## <strike>Comando para iniciais para habilitar configurações Testes E2E</strike>
  - <strike>acesse a pasta prisma/vitest-environment-prisma</strike>
  - <strike>execute os comandos:</strike>
    - <strike>npm link ./prisma/vitest-environment-prisma</strike>
    - <strike>npm link vitest-environment-prisma</strike>
