var express = require("express");
let todoController = require("./controllers/todoControllers");


var app = express();

// setup template engine (ejs)
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

// fire controllers
todoController(app);


app.listen(8088, () => {
  console.log("App listening on port 8088!");
});
