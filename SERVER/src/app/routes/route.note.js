const express = require("express");
const router = express.Router();
const routeTodo = require("../controllers/note.controller");

router.post("/", routeTodo.postTodo);
router.get("/", routeTodo.getTodo);
router.patch("/:id", routeTodo.editTodo);
router.delete("/:id", routeTodo.delteTodo);

module.exports = router;
