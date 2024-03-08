const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
cors = require('cors');

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const imagesRouter = require('./routes/images.js');

const MongoClient = require('mongodb').MongoClient;

const app = express();


MongoClient.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology: true,
})
.then(client => {
    console.log("Vi är uppkopplade mot databasen");

    const db = client.db('Gridsock7');
    app.locals.db = db;
})
.catch(err => console.error("Ingen kontakt med databasen", err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesRouter);


module.exports = app;