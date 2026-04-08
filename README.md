# 🚀 Job Tracker API

Backend RESTful API para **gestão de utilizadores e vagas de emprego**, com autenticação JWT, hashing de passwords e CRUD completo.

Construído com **Node.js, Express.js, MongoDB e Mongoose**, seguindo boas práticas de organização de código.

![Node.js](https://img.shields.io/badge/Node.js-green)
![MongoDB](https://img.shields.io/badge/MongoDB-green)
---

## 📌 Tecnologias Utilizadas

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- bcrypt  
- dotenv  

---

## 📂 Estrutura de Pastas
```
backend/
  │
  ├── server.js
  │
  ├── .envExample
  │
  └── src/
        │
        ├── app.js
        │
        ├── config/
        │    └── db.js
        │
        ├── models/
        │    ├── Jobs.js
        │    └── User.js
        │
        ├── routes/
        │    ├── authRoutes.js
        │    ├── jobRoutes.js
        │    └── userRoutes.js
        │
        ├── controllers/
        │    ├── authController.js
        │    ├── jobController.js
        │    └── userController.js
        │
        └── middleware/
             └── authMiddleware.js
```

---

## ⚡ Funcionalidades

- CRUD completo de utilizadores  
- Registo e login com autenticação JWT  
- Proteção de rotas com middleware  
- Hash de passwords com bcrypt  
- Estrutura organizada e escalável  

---

## 🛠️ Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/elviopatrickdev/job-tracker-api.git
cd job-tracker-api
```

### 2. Instalar dependências
```bash
npm install bcryptjs cors dotenv express jsonwebtoken mongoose
```

### 3. Substituir o arquivo .envExample por .env
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/userdb
JWT_SECRET=suachavesecreta
```

### 4. Executar o servidor
```bash
node --watch backend/server.js
```
Servidor rodando em: http://localhost:5000

## 📝 Endpoints
### Registrar utilizador

POST -> http://localhost:5000/auth/register
```bash
Body:

{
  "name": "Elvio Patrick",
  "email": "elvio@email.com",
  "password": "123456"
}

Resposta:

{
  "message": "Usuário criado com sucesso",
  "user": {
    "name": "Elvio Patrick",
    "email": "elvio@email.com",
    "_id": "69d68c265907ee9523e350dc",
    "createdAt": "2026-04-08T17:11:02.104Z",
    "updatedAt": "2026-04-08T17:11:02.104Z",
    "__v": 0
  }


```
#### 📸 Screenshot Thunder Client (Register):
![Descrição da imagem](readme_assets/post_register.png)

### Login

POST -> http://localhost:5000/auth/login
```bash
Body:

{
  "email": "elvio@email.com",
  "password": "123456"
}

Resposta:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDY4YzI2NTkwN2VlOTUyM2UzNTBkYyIsImlhdCI6MTc3NTY2ODM0NCwiZXhwIjoxNzc1NjcxOTQ0fQ.OJO3Br5FhPyQ081IaWX8jcSoqdxPMf6Wa24WmFbl7Po",
  "user": {
    "_id": "69d68c265907ee9523e350dc",
    "name": "Elvio Patrick",
    "email": "elvio@email.com",
    "createdAt": "2026-04-08T17:11:02.104Z",
    "updatedAt": "2026-04-08T17:11:02.104Z",
    "__v": 0
  }
```
#### 📸 Screenshot Thunder Client (Login):
![Descrição da imagem](readme_assets/post_login.png)

### 🔹 Listar utilizadores (protegido)

GET -> http://localhost:5000/users
```bash
Headers:

Authorization: Bearer JWT_TOKEN

Resposta:

{
  "users": [
    {
      "_id": "69d68c265907ee9523e350dc",
      "name": "Elvio Patrick",
      "email": "elvio@email.com",
      "createdAt": "2026-04-08T17:11:02.104Z",
      "updatedAt": "2026-04-08T17:11:02.104Z",
      "__v": 0
    }
  ],
  "message": "Leitura de todos os utilizadores feita com sucesso!"
}
```
#### 📸 Screenshot Thunder Client (All Users):
![Descrição da imagem](readme_assets/get_users.png)


### 🔹 Atualizar utilizador (protegido)

PUT -> http://localhost:5000/users/:id
```bash
Headers:

Authorization: Bearer JWT_TOKEN

Body:

{
  "password": "123456789"
}

Resposta:

{
  "updatedUser": {
    "_id": "69d68c265907ee9523e350dc",
    "name": "Elvio Patrick",
    "email": "elvio@email.com",
    "createdAt": "2026-04-08T17:11:02.104Z",
    "updatedAt": "2026-04-08T17:15:04.531Z",
    "__v": 0
  },
  "message": "Utilizador atualizado com sucesso!"

```
#### 📸 Screenshot Thunder Client (Edit User):
![Descrição da imagem](readme_assets/put_user.png)


### 🔹 Apagar utilizador (protegido)

DELETE -> http://localhost:5000/users/:id
```bash
Headers:

Authorization: Bearer JWT_TOKEN

Resposta:

{
  "message": "Utilizador deletado com sucesso!"
}
```
#### 📸 Screenshot Thunder Client (Delete User):
![Descrição da imagem](readme_assets/delete_user.png)

### 🔹 Criar Vaga de Emprego 

POST -> http://localhost:5000/users/:id
```bash
Headers:

Authorization: Bearer JWT_TOKEN

Resposta:
{
  {
  "success": true,
  "data": {
    "title": "Backend Developer",
    "company": "Startup X",
    "recruiter": "Ana Silva",
    "stack": "Node.js, Express.js, MongoDB",
    "location": "Híbrido",
    "status": "Entrevista",
    "details": "De preferência morar perto de Porto, Portugal",
    "createdBy": "69d692045907ee9523e350dd",
    "_id": "69d6937b5907ee9523e350df",
    "createdAt": "2026-04-08T17:42:19.651Z",
    "updatedAt": "2026-04-08T17:42:19.651Z",
    "__v": 0
  },
  "message": "Vaga criada com sucesso!"
}
```
#### 📸 Screenshot Thunder Client (Add Job):
![Descrição da imagem](readme_assets/post_job.png)

#### 📸 Screenshot Thunder Client (Add Bearer Token):
![Descrição da imagem](readme_assets/post_job_token.png)

---

## 👨🏽‍💻 Desenvolvedor

| Campo     | Informação |
|-----------|------------|
| Nome      | Elvio Patrick |
| Email     | elviopatrick.dev@gmail.com |
| LinkedIn  | [linkedin.com/in/elviopatrickdev](https://www.linkedin.com/in/elviopatrickdev/) |
| GitHub    | [github.com/elviopatrickdev](https://github.com/elviopatrickdev) |



