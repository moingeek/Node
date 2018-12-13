
const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("Hello from express");
    next();
});

app.use((req,res,next) => {
    console.log("Hello from middleware");
    res.send('<h1> I am Expressing</h1>');
});


app.listen(3000);