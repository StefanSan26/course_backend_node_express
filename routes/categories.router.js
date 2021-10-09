const express = require('express')
const CategoriesService = require('../services/categories.services')

const router = express.Router()
const service = new CategoriesService

router.get('/' , async (req,res)=>{
  const categories = await service.find()
  res.json(categories)
} )
router.get('/:id' , async (req,res)=>{
  const {id} = req.params
  const category = await service.findOne(id)
  res.json(category)
} )

router.post('/',async (req,res)=>{
  const body = req.body
  const create = await service.create(body)
  res.status(201).json(create)
})

// router.put('/:id',(req,res)=>{
//   const {data} = req.body
//   const category = service.update(data)
//   res.json(category)
// })
router.patch('/:id',async (req,res)=>{
  const { id } = req.params
  const body = req.body
  const update = await service.update(id,body)
  res.json(update)
})
router.delete('/:id',async (req,res)=>{
  const {id} = req.params
  const deleted = await service.delete(id)
  res.json(deleted)
})

module.exports = router
