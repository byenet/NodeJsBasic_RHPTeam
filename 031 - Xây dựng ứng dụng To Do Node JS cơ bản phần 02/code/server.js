var express = require('express');
var todoController = require('./controllers/todoControllers');

var app = express();

// setup template engine (ejs)
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//listen to  port 
app.listen(8088, () => {
  console.log("App listening on port 8088!");
});
