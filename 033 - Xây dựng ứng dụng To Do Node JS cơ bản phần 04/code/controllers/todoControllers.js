let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

let data = [];

module.exports = (app) => {
  // show todo
  app.get("/todo", (req, res) => {
    res.render("todo", {todos: data});
    // res.render("todo");
  });

  // Fill infor todo
  app.post("/todo", urlencodedParser ,(req, res) => {
    // console.log(req.body);
    data.push(req.body);
    res.json(data);
  });

  // remove todo
  app.delete("/todo/:item", (req, res) => {
    // console.log('delete');
    // console.log(req.params);
    item1 = req.params.item.replace(/-/g, ' ');
    // console.log(item1);
    data = data.filter((todo) => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data)
  });
};
