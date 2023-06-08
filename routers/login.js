const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerLogin");

router.get("/", Controller.login);
router.post("/", Controller.postLogin);

module.exports = router;
