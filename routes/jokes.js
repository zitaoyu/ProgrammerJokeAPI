const express = require('express');
const router = express.Router();
const Joke = require('../models/Joke')

// GET request: get all jokes
router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes);
    } catch (err) {
        res.json({message: err});
    }
});

// GET request: one random joke
router.get('/random', async (req, res) => {
    try {
        var random = Math.floor(Math.random() * (await Joke.find()).length);
        const jokes = await Joke.findOne().skip(random);
        res.json(jokes);
    } catch (err) {
        res.json({message: err});
    }
});

// GET request: get all one part jokes
router.get('/onepart', async (req, res) => {
    try {
        const jokes = await Joke.find({ 'type' : 'onepart'});
        res.json(jokes);
    } catch (err) {
        res.json({message: err});
    }
});

// GET request: get all two part jokes
router.get('/twopart', async (req, res) => {
    try {
        const jokes = await Joke.find({ 'type' : 'twopart'});
        res.json(jokes);
    } catch (err) {
        res.json({message: err});
    }
});

// GET request: get a joke with a specific Id
router.get('/:postId', async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.postId);
        res.json(joke);
    } catch (err) {
        res.json({message: err});
    }
});

// DELETE request: delete a joke
router.delete('/:postId', async (req, res) => {
    try {
        const removedJoke = await Joke.remove({ _id: req.params.postId });
        res.json(removedJoke);
    } catch (err) {
        res.json({message: err});
    }
});

// POST request
router.post('/', async (req, res) => {
    const joke = new Joke({
        type: req.body.type,
        partone: req.body.partone,
        parttwo: req.body.parttwo
    });

    try {
        const savedJoke = await joke.save();
        res.json(savedJoke);
    } catch (err){
        res.json({message: err});
    }

});

module.exports = router;