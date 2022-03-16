const express = require("express");
const NeowsController = require('./controllers/NeowsController')

const { Router } = express

const routes = new Router()

routes.get('/indexAsteroids' , NeowsController.index)


module.exports = routes