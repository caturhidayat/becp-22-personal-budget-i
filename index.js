const express = require("express");
const app = express();
const PORT  = 3000;
require('dotenv').config()

const apiRoute = require('./api/api')

app.use(express.json());

// API ROUTE
app.use('/api', apiRoute)
app.get('/', (req, res, next) => {
    res.send('HELLO!')
})


app.listen(PORT, () => {
    console.log(`App runnning on http://localhost:${PORT}`);
})