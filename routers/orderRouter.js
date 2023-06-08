const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/:productId', orderController.getOrderById)
router.get('/:id/delete', orderController.deleteOrder)


module.exports = router