# 🚀 Sistema de Gestão de Ideias

API completa para gestão de ideias com autenticação, CRUD e sistema de evoluções.

## 📋 Funcionalidades

- ✅ Autenticação JWT (login seguro)
- ✅ CRUD de Ideias (criar, ler, atualizar, deletar)
- ✅ Sistema de Evoluções (histórico de cada ideia)
- ✅ Gestão de Unidades
- ✅ Banco de dados MongoDB Atlas (nuvem)
- ✅ Arquitetura MVC
- ✅ Tratamento centralizado de erros
- ✅ Status HTTP padronizados

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| Node.js | Runtime JavaScript |
| Express.js | Framework web |
| MongoDB Atlas | Banco de dados na nuvem |
| JWT | Autenticação stateless |
| Bcrypt | Hash de senhas |
| CORS | Segurança de requisições |

## 📁 Estrutura do Projeto

```bash
src/
├── controllers/ # Lógica das rotas
├── models/ # Schemas do MongoDB
├── routes/ # Endpoints da API
├── middleware/ # Auth e tratamento de erros
└── server.js # Entry point
```

## 🔧 Como rodar localmente

### Pré-requisitos
- Node.js (v14+)


### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/[SEU_GITHUB_USERNAME]/[NOME_DO_REPO].git

# 2. Instale as dependências
npm install

# 3. Crie um arquivo .env com suas credenciais
PORT=3000
MONGODB_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta

# 4. Inicie o servidor
npm start
```



## 📡 Endpoints

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/auth` | Criar conta | ❌ |
| POST | `/auth/login` | Login | ❌ |
| GET | `/auth` | Listar usuários | ✅ |
| GET | `/` | Listar ideias | ✅ |
| POST | `/` | Criar ideia | ✅ |
| PUT | `/:id` | Atualizar ideia | ✅ |
| DELETE | `/:id` | Deletar ideia | ✅ |
| GET | `/unidade` | Listar unidades | ✅ |
| POST | `/unidade` | Criar unidade | ✅ |


### 📊 Códigos de Resposta

| Código | Significado |
|--------|-------------|
| 200 | Sucesso (GET, PUT, DELETE) |
| 201 | Criado com sucesso (POST) |
| 400 | Requisição inválida |
| 401 | Não autorizado (token ausente) |
| 403 | Token inválido ou expirado |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |