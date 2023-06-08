const express = require("express");
const router = express.Router();
const registerRouter = require("./register");
const loginRouter = require("./login");
const productRouter = require("./products");
const Controller = require("../controllers/controllerLogin");
// const usersRouter = require("./users");

const isLogin = (req, res, next) => {
  // console.log(req.session);
  if (!req.session.userId) {
    const error = "Please login first!";
    res.redirect(`/login?error=${error}`);
  } else {
    next();
  }
};

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.get("/logout", Controller.logout);
router.use(isLogin);
router.use("/product", productRouter);
// router.use("/users", usersRouter);

module.exports = router;
