const express = require('express');
const axios = require("axios");
const app = express();

const router = express.Router();

router.post("/test", async (req, res) => {
    try {
        const response = await axios.post("http://localhost:8080/api/test");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("99");
    }
});

module.exports = router;