const express = require('express')
const ClientsService = require('../services/clients.services')

const router = express.Router()
const service = new ClientsService

router.get('/' , (req,res)=>{
  clients = service.find()
  res.json(clients)
} )
router.get('/:id' , (req,res)=>{
  const {id} = req.params
  client = service.findOne(id)
  res.json(client)
} )



module.exports = router
