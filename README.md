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


***

# App

GymPass style app.

## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfil de um usuário logado;
- [X] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X] Deve ser possível o usuário obter o seu histórico de check-ins;
- [X] Deve ser possível o usuário buscar academias próximas (até 10km);
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [X] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [X] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
