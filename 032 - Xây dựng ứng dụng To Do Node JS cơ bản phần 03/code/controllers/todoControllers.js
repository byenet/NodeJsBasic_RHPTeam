module.exports = (app) => {
  // show todo
  app.get("/todo", (req, res) => {
    res.render("todo");
  });

  // Fill infor todo
  app.post("/todo", (req, res) => {});

  // remove todo
  app.delete("/todo", (req, res) => {});
};
