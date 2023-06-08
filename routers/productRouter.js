const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.productCategory)
router.get('/create', productController.formCreateProduct)
router.post('/create', productController.postProduct)
router.get('/:id/edit', productController.formEditProduct)
router.post('/:id/edit', productController.editProduct)
router.get('/:id/delete', productController.deleteProduct)
router.get('/:id', productController.oneProduct)



module.exports = router