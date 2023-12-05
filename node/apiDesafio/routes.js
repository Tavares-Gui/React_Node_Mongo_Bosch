const bodyParser = require('body-parser');
const person = require('./carros');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person
    )
}