import express from 'express';
import User from '../models/Usuario.js';

const router = express.Router();

// Criar um novo usuário
router.post('/usuario', async (req, res) => {
    try {
        const { name, email, senha } = req.body;
        const user = await User.create({ name, email, senha });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os usuários
router.get('/usuario', async (req, res) => {
    try {
        const usuario = await User.findAll();
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter usuário por ID
router.get('/usuario/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar usuário por ID
router.put('/usuario/:id', async (req, res) => {
    try {
        const { name, email, senha } = req.body;
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.name = name;
            user.email = email;
            user.senha = senha;
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Excluir usuário por ID
router.delete('/usuario/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
