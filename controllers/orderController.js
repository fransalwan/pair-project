const { Order, Product, User, Profile } = require('../models/index')

class orderController {

    static listOrder(req, res) {//where userid dr session
        Order.findAll()
            .then(data => {
                res.render('listOrder', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getOrderById(req, res) { //kirimny userId

        const { id } = req.session
        const { productId } = req.params
        User.findByPk(1, {
            include: Profile
        })
            .then(dataUser => {
                console.log(dataUser);
                const address = dataUser.Profile.address
                return Order.create({
                    orderDate: new Date(),
                    totalOrder: 1,
                    UserId: id,
                    address,
                    ProductId: productId
                })
            })
            .then((data) => {
                res.redirect(`/${productId}`)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static deleteOrder(req, res) {
        const { id } = req.params
        Order.destroy({
            where: {
                id
            }
        })
            .then(data => {
                res.redirect('')
            })
    }



}


module.exports = orderController