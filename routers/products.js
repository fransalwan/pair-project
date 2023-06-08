const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerProduct");

router.get("/", Controller.readProduct);
router.get("/add", Controller.addForm);

// router.get("/detail", Controller.profile);

module.exports = router;
