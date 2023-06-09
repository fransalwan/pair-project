const { User, Profile } = require("../models");
class Controller {
  static registerForm(req, res) {
    res.render("registerForm");
  }

  static addUser(req, res) {
    const { username, email, password, fullName, address, phoneNumber } = req.body;


    User.create({
      username,
      email,
      password,
      role: "customer",
    }, { returning: true })
      .then((result) => {
        return Profile.create({ fullName, address, phoneNumber, UserId: result.id })
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        res.send(err);
      });
  }

}

module.exports = Controller;
