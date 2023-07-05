const express = require("express");
const router = express.Router();
const controllUser = require("../controllers/user.controllers");

router.post("/", controllUser.postUser);
router.get("/", controllUser.getUser);
router.patch("/:id", controllUser.editUser);
router.delete("/:id", controllUser.deleteUser);

module.exports = router;
