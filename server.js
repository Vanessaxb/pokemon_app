const express = require('express');

const pokemon = require('./models/pokemon')

const app = express();
const PORT = 3000;

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
}) 

//pokemon data
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})


//listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )