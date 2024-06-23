import express from 'express';

const app = express();
const port = 3000;

// ROTAS NECESSÁRIAS
    // GET - Pega info
    // POST - Cria info
    // PUT - Altera toda info
    // PATCH - Altera uma parte da info
    // DELETE - Apaga uma info

app.get('/', (req, res) => { 
    res.send('Hello World!')
  })

  // Adicionando o método POST #BiaDamasceno
app.post('/create', (req, res) => {
  const newData = req.body;
  console.log('Dados recebidos:', newData);
  res.status(201).send('Dados criados com sucesso!');
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })