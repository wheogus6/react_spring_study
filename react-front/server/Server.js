const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = 3001;
const app = express();

const userRoutes = require('./routes/UserRoutes');


app.use(cors());

app.use('/front/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});