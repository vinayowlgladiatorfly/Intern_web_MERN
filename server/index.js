const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
require('dotenv').config();
require('./Models/db')


const PORT = process.env.PORT || 8000;

app.get('/ping', (req,res) => {
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/product',ProductRouter);

app.listen(PORT, () => {
    console.log('Server is running on ${PORT}')
})