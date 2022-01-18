const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const jokeRoute = require('./routes/jokes');

app.use('/jokes', jokeRoute);

//TO-DO
const DB_CONNECTION = "your mongoDb url";
//Connect to DB
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!!!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));