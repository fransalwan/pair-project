const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerProduct");

router.get("/add", Controller.adminForm);

// router.get("/detail", Controller.profile);

module.exports = router;
