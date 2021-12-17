const { Router } = require("express");
const Todo = require("../models/Todo");
let router = Router();
const upload = require("./upload");

router
  .get("/get-all_todos", async (req, res) => {
    const todos = await Todo.find({});
    res.send(todos);
  })
  .post("/create-todo", async (req, res) => {
    upload(req, res, (error) => {
      console.log(req.body);
      console.log(req.file);
      let fullPath = req.file.filename;
      let data = {
        title: req.body.title,
        path: fullPath,
      };
      let todo = new Todo(data);
      todo.save();
      res.send({
        success: {
          message: "Added successfully",
        },
      });
    });
  })
  .post("/complete-todo", async (req, res) => {
    const todo = await Todo.findById(req.body.id);
    todo.complete = true;
    await todo.save();
    res.send({
      success: {
        message: " successfully",
      },
    });
  })
  .patch("/update-todo", (req, res) => {})
  .delete("/delete-todo/:id", (req, res) => {});

module.exports = router;
