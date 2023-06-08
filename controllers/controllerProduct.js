class Controller {
  static readProduct(req, res) {
    res.render("product");
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
