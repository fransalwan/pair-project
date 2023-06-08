class Controller {
  static adminForm(req, res) {
    res.render("adminForm");
  }

  static addForm(req, res) {
    if (req.session.role !== "admin") {
      res.redirect("/product");
      return;
    }
    res.render("addForm");
  }
}

module.exports = Controller;
