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
- ## Comando para iniciais para habilitar configurações Testes E2E
  - acesse a pasta prisma/vitest-environment-prisma
  - execute os comandos:
    - cd prisma/vitest-environment-prisma
    - npm link
    - cd ..
    - cd ..
  - estando no diretorio raiz da aplicação, execute o seguinte comando:
    - npm link vitest-environment-prisma
