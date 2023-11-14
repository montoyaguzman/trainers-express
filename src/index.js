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

  const name = req.query.name || '';
  const isChampion = req.query.isChampion || null;

  const isLikeName = ((trainer) => {
    return trainer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  });

  const hasWinnedTournaments = ((trainer) => {
    return trainer.winnedTournaments.length;
  });


  let data = trainers.filter(isLikeName);
  if (isChampion) {
    data = data.filter(hasWinnedTournaments);
  }

  res.json(data);
});
