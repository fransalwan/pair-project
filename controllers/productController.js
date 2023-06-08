const { Product } = require('../models/index')
const { Op } = require('sequelize')
const { formatCurrency } = require('../helpers/helper')


class productController {


    static productCategory(req, res) {
        const { search } = req.query

        let where = {}

        if (search) {
            where.name = {
                [Op.iLike]: `%${search}%`
            }
        }

        Product.findAll({
            where
        })
            .then(data => {
                // console.log(data);
                res.render('product', { data, formatCurrency, role: req.session.role })
            })
            .catch(err => {
                res.send(err)
            })

    }

    static oneProduct(req, res) {
        const { id } = req.params
        Product.findByPk(id)
            .then(data => {
                // console.log(data);
                res.render('oneProduct', { data, formatCurrency })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formCreateProduct(req, res) {
        const { errors } = req.query
        res.render('formCreate', { errors })

    }

    static postProduct(req, res) {
        // console.log('masuk');
        const { name, image, description, price } = req.body
        // console.log(req.body);
        Product.create({
            name,
            image,
            description,
            price
        })
            .then(data => {
                res.redirect('/product')
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    let errors = err.errors.map(el => el.message)
                    res.redirect(`/product/create?errors=${errors}`)
                } else {
                    res.send(err)
                }
            })

    }
    static formEditProduct(req, res) {
        const { id } = req.params
        console.log(req.params);
        Product.findByPk(id)
            .then(data => {
                // console.log(data);
                res.render('editProduct', { data })
            })
            .catch(err => {
                res.send(err)
            })



    }

    static editProduct(req, res) {
        const { id } = req.params
        // console.log(req.params);
        const { name, image, description, price } = req.body
        // console.log(req.body);
        Product.update({
            name,
            image,
            description,
            price
        }, {
            where: { id }
        })
            .then(data => {
                res.redirect('/product')
            })
            .catch(err => {
                res.send(err)
            })

    }

    static deleteProduct(req, res) {
        const { id } = req.params
        Product.destroy({
            where: { id }
        })
            .then(data => {
                res.redirect('/product')
            })
            .catch(err => {
                res.send(err)
            })
    }




}


module.exports = productController


