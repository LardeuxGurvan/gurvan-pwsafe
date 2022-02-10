require('dotenv').config();

const http = require('http');
require('debug')('app:server');

const app = require('./app');

const port = process.env.PORT ?? 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
