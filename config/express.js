const express = require('express');
const session = require('express-session');

const cors = require('../middleware/cors.js');

module.exports = (app) => {
    app.use('/static', express.static('static'));

    app.use(session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: 'auto' }
    }));
    app.use(express.json());
    app.use(cors());
};