var express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.send('this is home page');
});

app.get('/contact/:userId/send/:content', (req,res) => {
    res.send('Customer have id ' + req.params.userId + ' send content ' + req.params.content);
});

app.listen(8088, () => {
    console.log('App listening on port 8088!');
});

