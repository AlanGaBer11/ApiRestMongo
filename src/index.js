require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbconnection } = require('./database/userDB')

const v1User = require('./v1/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/user", v1User);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} uwu`);
})

dbconnection()
