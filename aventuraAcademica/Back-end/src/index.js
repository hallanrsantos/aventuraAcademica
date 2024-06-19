import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
const port = 3000;

// ROTAS NECESSÁRIAS
    // GET - Pega info
    // POST - Cria info
    // PUT - Altera toda info
    // PATCH - Altera uma parte da info
    // DELETE - Apaga uma info

// node --watch index.js para atualizar automaticamente

const usuarios = [];

app.post('/usuarios', async (req, res) => {
  
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.nome,
      password: req.body.senha
    }
  })

  res.status(201).json(req.body);
})

app.get('/usuarios', (req, res) => { 
    res.status(200).json(usuarios);
  })
  
  app.listen(port, () => {
    console.log(`O app está rodando na porta ${port}`)
  })