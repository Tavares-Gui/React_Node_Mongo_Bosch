const router = require('./startup/routes');
const express = require('express')
const app = express();
const cors = require('cors')

require('./startup/db')();

const port = 8080;

app.use(cors({
    origin: '*'
}));

router(app);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;