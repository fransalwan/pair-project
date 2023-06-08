const { User } = require("../models/index");
const bcrypt = require("bcryptjs");

class Controller {
  static login(req, res) {
    const { error } = req.query;
    res.render("login", { error });
  }

  static postLogin(req, res) {
    const { username, email, password } = req.body;
    const error = [];

    if (!username) {
      error.push("username tidak boleh kosong");
    }
    if (!email) {
      error.push("email tidak boleh kosong");
    }
    if (!password) {
      error.push("password tidak boleh kosong");
    }

    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password); // true or false

          if (isValidPassword) {
            // case berhasil login
            req.session.userId = user.id;
            req.session.role = user.role; // set session di controller login
            console.log(req.session.role);
            console.log(req.session.userId, 'ini user id');
            console.log(user.id, 'ini user.id');

            return res.redirect("/product");
          } else {
            const error = "invalid username/password";
            return res.redirect(`/login?error=${error}`);
          }
        } else {
          const error = "invalid username/password";
          return res.redirect(`/login/?error=${error}`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/login");
      }
    });
  }
}

module.exports = Controller;
