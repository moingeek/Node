const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("Hello from express");
    next();
});

app.use((req,res,next) => {
    console.log("Hello from middleware");
});

const server = http.createServer(app);

server.listen(3000);