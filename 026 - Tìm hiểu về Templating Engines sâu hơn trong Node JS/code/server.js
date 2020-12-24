var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', 'utf8');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html', 'utf8');
})

app.get('/register/:userId', (req, res) => {

    var infor = {
        name: 'Huy dep trai',
        age: '21',
        email: 'huynha@gmail.com',
        hobbies: ['books', 'plays game', 'go out']
    }

    res.render('register', {id: req.params.userId, information: infor})
})




app.listen(8088, () => {
    console.log('App listening on port 8088!');
});

