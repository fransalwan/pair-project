const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerRegister");

router.get("/", Controller.registerForm);
router.post("/addUser", Controller.addUser);

module.exports = router;
