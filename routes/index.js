const express = require('express')
const productRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router')
const clientsRouter = require('./clients.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productRouter)   //primer param: la ruta o endpoint --Segundo param: lo que va a llamar
  router.use('/categories',categoriesRouter)
  router.use('/users',usersRouter)
  router.use('/clients',clientsRouter)
}

module.exports = routerApi
