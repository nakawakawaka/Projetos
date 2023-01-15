//  config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

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
  .connect('mongodb+srv://naokinakamura:ur2reVetd6dYzaLM@apicluster.kx6zbwj.mongodb.net/bancodaapi?retryWrites=true&w=majority')
  .then(() => {
    console.log("conectamos ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));



// Senha atlas: ur2reVetd6dYzaLM