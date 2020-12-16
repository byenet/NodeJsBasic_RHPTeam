var express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.send('this is home page');
});

app.get('/contact', (req,res) => {
    res.send('this is contact');
});

app.listen(8088, () => {
    console.log('App listening on port 8088!');
});

