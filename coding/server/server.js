const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('group_project');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter);
    const ducksCollection = db.collection('ducks');
    const ducksRouter = createRouter(ducksCollection);
    app.use('/api/ducks', ducksRouter);
    const quizCollection = db.collection('quiz');
    const quizRouter = createRouter(quizCollection);
    app.use('/api/quiz', quizRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});