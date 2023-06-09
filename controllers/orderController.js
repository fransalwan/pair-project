const { Order, Product, User, Profile } = require('../models/index')

class orderController {

    static listOrder(req, res) {//where userid dr session
        const userId = req.session.userId
        // console.log(req.session.userId, 'ini dari order controller')

        console.log(req.session.userId, 'ini user id');
        Order.findAll({
            where: {
                UserId: userId
            }
        })
            .then(data => {
                // console.log(data)
                res.render('listOrder', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getOrderById(req, res) { //kirimny userId
        console.log("dsn");
        const id = req.session.userId
        // console.log(req.session);
        const { productId } = req.params
        User.findByPk(id, {
            include: Profile
        })
            .then(dataUser => {
                const address = dataUser.Profile.address
                return Order.create({
                    orderDate: new Date(),
                    totalOrder: 1,
                    UserId: dataUser.id,
                    address,
                    ProductId: productId
                })
            })
            .then((data) => {
                res.redirect('/orders')
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
                res.redirect('/orders')
            })
            .catch(err => {
                res.send(err)
            })
    }



}


module.exports = orderController