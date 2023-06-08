const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const session = require("express-session");

app.set("view engine", "ejs"); // template engine
app.use(express.urlencoded({ extended: true })); //middleware bodyparser untuk menangkap value dari inputan
app.use(
  session({
    secret: "rahasia",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true, // untuk security dari csrf attack
    },
  })
);

app.use(router); // middleware router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
