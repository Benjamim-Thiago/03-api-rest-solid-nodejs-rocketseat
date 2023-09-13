# Aplicação dockerizada
- Docker-compose.yml;
- Diretório da aplicação (/app)

# Aplicação dockerizada
- Configurações e comando para executar em modo desenvolvimento:
  - Clone projeto
  - Acesse o diretorio do projeto
  - execute docker composer up -d ou docker-composer up -d
  - execute o seguinte comandos:
    - npm install
    - npx prisma migrate dev
    - npm run start:dev   
