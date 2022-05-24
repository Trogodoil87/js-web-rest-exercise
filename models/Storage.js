const { Schema, model } = require('mongoose');

const storageSchema = new Schema({

});


const Storage = model('Storage', storageSchema);

module.exports = Storage;