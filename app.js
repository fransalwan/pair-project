const express = require('express')
const app = express()
const port = 8000
const router = require('./routers/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
