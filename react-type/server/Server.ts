import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.ts';
import productRoutes from './routes/ProductRoutes.ts';

const port = 3002;
const app = express();

app.use(cors());
app.use(express.json()); // JSON 바디 파서 추가 (필수)

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});