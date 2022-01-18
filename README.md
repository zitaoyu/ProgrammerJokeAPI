# ProgrammerJokeAPI
ProgrammerJokeAPI is a REST API created using Node.js. A service that delivers jokes for programmers.

\* To run the app, you have to change DB_CONNECTION to your mongoDB or your prefered database. *

## Run the app

    npm start
then app will be running on http://localhost:3000/

## Routes
| Parameter | Description |
| --- | --- |
| /jokes | Get all the jokes in the database |
| /jokes/random | Get one random joke from the database |
| /jokes/onepart | Get all one part jokes from the database |
| /jokes/twopart | Get all two part jokes from the database |
