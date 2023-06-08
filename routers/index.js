const express = require('express')
const router = express.Router()
const productRouter = require('./productRouter')
const orderRouter = require('./orderRouter')
const loginRouter = require('./login')
const registerRouter = require('./register')
const Controller = require('../controllers/controllerLogin')
const session = require('express-session')

const isLogin = (req, res, next) => {
    console.log(req.session);
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
router.use("/product", productRouter)
router.use('/orders', orderRouter)

module.exports = router 