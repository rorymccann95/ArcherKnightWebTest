const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/', apiRouter)

app.use(express.json());

app.listen(3000, () => {
    console.log("The server is alive and well, running on this port: 3000")
})