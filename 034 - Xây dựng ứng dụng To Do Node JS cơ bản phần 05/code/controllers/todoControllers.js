let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

let mongoose = require('mongoose');
// connect database 
mongoose.connect('mongodb://localhost/todoList');

//create a schema - this is like buleprint
let todoSchema = new mongoose.Schema({ 
  item: String
})

var Todo = mongoose.model('Todo', todoSchema, 'task');

// test them 1 task
// let itemFirst = Todo({item: 'go out'}).save((err) => {
//   if(err) throw err;
//   console.log('success');
// })

 

// let data = [
//   {item: 'go to school'},
//   {item: 'go to movie'},
//   {item: 'go out'}
// ];

module.exports = (app) => {
  // show todo
  app.get("/todo", (req, res) => {
    res.render("todo", {todos: data});
    // res.render("todo");
  });

  // Fill infor todo
  app.post("/todo", urlencodedParser ,(req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.json(data);
  });

  // remove todo
  app.delete("/todo", (req, res) => {});
};
