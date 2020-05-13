const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const detailsRoute = require('./routes/details-routes');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/details', detailsRoute);

app.use((req, res, next) => {
    res.status(400).json({ message: 'Bad request' });
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occured!' });
})

mongoose
    .connect('mongodb+srv://raghu:test123@cluster0-1cfzt.mongodb.net/profileApp?retryWrites=true&w=majority')
    .then(() => {
        console.log('connection established');
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    });