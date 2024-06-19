const express = require('express')
const router = require('./routes/routes')
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

const porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log("API rodando na porta local: " + porta);
})