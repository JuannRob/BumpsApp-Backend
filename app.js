const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const config = require("config");
const Router = require('./src/routes/bumps');
const mongoose = require("mongoose");

const mongoConnectionString = (config.get('database.mongodb.connectionString'))
mongoose.connect(mongoConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('connected to MONGODB')).catch((err) => { throw (err) });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router);

module.exports = app;
