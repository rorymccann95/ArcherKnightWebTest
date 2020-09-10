const express = require('express');
const apiRouter = require('./routes');


const app = express(); 

app.use('/api/', apiRouter)

app.use(express.json());

app.listen(3000, () => {
    console.log("The server is alive and well, running on this port: 3000")
})