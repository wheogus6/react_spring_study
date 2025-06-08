import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.ts';

const port = 3002;
const app = express();

app.use(cors());
app.use(express.json()); // JSON 바디 파서 추가 (필수)

app.use('/front/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});