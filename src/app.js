import express from 'express'
import authRoutes from './routes/authRoutes.js';
import authMiddleware from './middlewares/authMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import saleRoutes from './routes/saleRoutes.js';

const app = express()

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);

app.use('/api/sales', saleRoutes);

app.get('/', (req, res) => {
    res.send('API Funcionando');
});

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({
        msg: 'Acesso Permitido!',
        user: req.user
    });
});

export default app;