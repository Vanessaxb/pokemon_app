const express = require('express');

const app = express();
const PORT = 3000;

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
}) 


//listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )