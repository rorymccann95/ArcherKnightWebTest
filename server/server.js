const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const app = express(); 

const port = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/', apiRouter);

app.use(express.json());

app.listen(port, () => {
    console.log(`The server is alive and well, running on this port: ${port}` )
});