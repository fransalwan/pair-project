const express = require('express')
const app = express()
const port = 8000
const router = require('./routers/index')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
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

app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
