const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { trainers } = require('../data/trainers');

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor trainers runging in ${port}`);
});

// GET: Obtener todos los pokemons
app.get('/trainers', (req, res) => {
    res.json(trainers);
});
