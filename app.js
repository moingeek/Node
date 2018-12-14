
const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
    console.log("This always runs");
    next();
});

app.use('/add-product',(req,res,next) => {
    res.send('<h1> I am at add-product page</h1>');
});

app.use('/',(req,res,next) => {
    console.log("Hello from middleware");
    res.send('<h1> I am Expressing</h1>');
});


app.listen(3000);