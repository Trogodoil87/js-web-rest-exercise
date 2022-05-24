const homeController = require('../controllers/home.js');

module.exports = (app) => {
    app.use(homeController);
};