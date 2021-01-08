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

module.exports = (app) => {
  // show todo
  app.get("/todo", (req, res) => {
    // get data from mongodb and pass it to view
    Todo.find({}, (err, data) => {
      if(err) throw err;
      // console.log(data);
      res.render("todo", { todos: data });
    })
  });

  // Fill infor todo
  app.post("/todo", urlencodedParser ,(req, res) => {
    let newTodo = Todo(req.body).save((err, data) => {
      if(err) throw err;
      res.json(data)
    })
  });

  // remove todo
  app.delete("/todo/:item", (req, res) => {
    // delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err,data) => {
        if(err) throw err;
        res.json(data)
    }); 
  });

};
