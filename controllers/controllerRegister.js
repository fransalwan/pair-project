const { User } = require("../models");
class Controller {
  static registerForm(req, res) {
    res.render("registerForm");
  }

  static addUser(req, res) {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    User.create({
      username,
      email,
      password,
      role: "customer",
    })
      .then((result) => {
        res.redirect("/login");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
