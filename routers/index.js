const express = require('express')
const router = express.Router()
const productRouter = require('./productRouter')
const orderRouter = require('./orderRouter')



router.use("/products", productRouter)
router.use('/orders', orderRouter)
module.exports = router 