import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.post("/test", async (req: Request, res: Response) => {
    try {
        const response = await axios.post("http://127.0.0.1:8080/api/test");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("99");
    }
});

export default router;