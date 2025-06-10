import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.post("/getProductList", async (req: Request, res: Response) => {
    try {
        const response = await axios.post("http://127.0.0.1:8080/api/product/getProductList");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("99");
    }
});

router.post("/getProductDetail", async (req: Request, res: Response) => {
    const { id } = req.body;  // 클라이언트가 보낸 id 추출
    try {
        const response = await axios.post("http://127.0.0.1:8080/api/product/getProductDetail", { id });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("99");
    }
});


export default router;