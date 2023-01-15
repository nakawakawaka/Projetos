//  config inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWAORD = process.env.DB_PASSWAORD;

//  forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

//  rotas da API
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

//  rota inicial / endpoint
app.get('/', (req, res) => {

//  mostrar req

  res.json({ message: 'oi express!' })
});

//  entregar uma porta
mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWAORD}@apicluster.kx6zbwj.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
  .then(() => {
    console.log("conectamos ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));



// Senha atlas: ur2reVetd6dYzaLM