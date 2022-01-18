const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const jokeRoute = require('./routes/jokes');

app.use('/jokes', jokeRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!!!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));