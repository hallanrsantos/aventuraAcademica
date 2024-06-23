import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import userRoutes from './routes/usuarioRota.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('API de Usuários');
});

// Iniciar o servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
