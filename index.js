const express = require('express');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js');
const routesConfig = require('./config/routes.js');

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.get('/', (req, res) => res.json({message: 'Operation'}));

    app.listen(3030, () => console.log('Listen on port 3030!'));
}