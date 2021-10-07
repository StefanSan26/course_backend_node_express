const express = require('express')
const UsersService = require('../services/users.services')

const router = express.Router()
const service = new UsersService

router.get('/' , (req,res)=>{
  users = service.find()
  res.json(users)
} )
router.get('/:id' , (req,res)=>{
  const {id} = req.params
  user = service.findOne(id)
  res.json(user)
} )



module.exports = router
