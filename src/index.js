const express = require("express");
const routes = require('./routes')

const app = express()

app.set('json spaces', 4)

app.use(routes)

app.listen(3000, () => {
    console.log('Server on-line 🔥')
})