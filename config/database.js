const mongoose = require('mongoose');

const dbName = 'furniture-rest';

const connectionString = `mongodb://localhost:27017/${dbName}`;
require('../models/Storage.js');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    } catch (err) {
        console.log('Database connection failed');
        process.exit(1);
    }
}