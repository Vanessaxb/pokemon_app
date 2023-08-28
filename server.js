const express = require('express');
const jsxEngine = require('jsx-view-engine')

const pokemonData = require('./models/pokemon')

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
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
}) 

//pokemon data list
app.get('/pokemon', (req, res) => {
    // res.send(pokemonData)
    res.render("Index", {
        pokemonData: pokemonData,
    })
})

//pokemon detailed itm by param
app.get('/pokemon/:id', (req, res) => { 
    res.send(req.params.id)
    })




//listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )