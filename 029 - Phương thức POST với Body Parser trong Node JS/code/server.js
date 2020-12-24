var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlPhanTich = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');


// app.use(express.static('./stuff'));
app.use('/assets', express.static('./stuff'));

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html', 'utf8');
    res.render('index');
})

app.get('/login', (req, res) => {
    // res.sendFile(__dirname + '/login.html', 'utf8');
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get("/contact",(req, res) => {
  res.render("contact");
});

app.post('/contact', urlPhanTich, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
})

app.listen(8088, () => {
    console.log('App listening on port 8088!');
});

