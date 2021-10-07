const express = require('express')
const CategoriesService = require('../services/categories.services')

const router = express.Router()
const service = new CategoriesService

router.get('/' , (req,res)=>{
  const categories = service.find()
  res.json(categories)
} )
router.get('/:id' , (req,res)=>{
  const {id} = req.params
  const category = service.findOne(id)
  res.json(category)
} )


module.exports = router
