const express = require("express");
const jsxEngine = require("jsx-view-engine");

const pokemonData = require("./models/pokemon");

require('dotenv').config();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon')

const app = express();
const PORT = 3000;

//!app config
app.set("view engine", "jsx"); //set activatws the view engine jsx
app.engine("jsx", jsxEngine());

//! Middleware. Needs to come before my routes
app.use((req, res, next) => {
  // console.log("I run on every request");
  console.log(req.method, req.url);
  next();
});
//parse and add incoming data to a req body object
app.use(express.urlencoded({ extended: false }));

//!Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//pokemon data list
app.get("/pokemon", async (req, res) => {
  // res.send(pokemonData)

  const pokemonFromDB = await Pokemon.find({});

  res.render("Index", {
    pokemonData: pokemonFromDB,
  });
});

//creating pokemon/new route
app.get('/pokemon/new', (req, res) => {
  res.render('New')
});

//!post
app.post('/pokemon', async (req, res) => {
  try {
    const createdPokemon = await Pokemon.create(req.body);
    console.log(createdPokemon);;
    res.redirect('/pokemon');
  } catch (error) {
    console.log(error);
  }
});


//pokemon detailed item by param
app.get("/pokemon/:id", async (req, res) => {
 
  
  const { id } = req.params;
  const pokemon = await Pokemon.findById(id)
  console.log("Found Pokemon, pokemon");

  res.render("Show", {
    pokemon: pokemon,
  });
  
});

//!Connect to pokemon database using Mongoose
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', ()  => {
  console.log('Connected to Mongo');
})

//listen to PORT
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
