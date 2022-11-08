'use strict';
require ('@babel/register');
require ('@babel/polyfill');

const app = require ('../app').default;
const http = require('http');
const port = 8201;

const server = http.createServer(app);
server.listen(port);

server.on('listening',() =>{
    console.log(`Listening on ${port}`);
});