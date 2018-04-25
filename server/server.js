const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./routes');
const clientPath = path.join(__dirname, '../client');

let app = express();


app.use(express.static(clientPath));


app.use(cors());                    // allows user api requests
app.use(express.json());            // parses json data
app.use('/api', apiRouter);



app.listen(3000, () => {
    console.log('port 3000');
});