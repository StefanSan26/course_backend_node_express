const express = require('express')
const ProductsService =require('../services/products.services')

const router = express.Router()

const service = new ProductsService()
router.get('/',async (req, res)=>{
  const products = await service.find()
  res.json(products)
})

//error comun: Enpoints estaticos que entran en conflicto con Endpoints dinamicos
//Solucion: Ubicarlos antes de los endpoints dinamicos
router.get('/filter',(req,res)=>{
  res.send = ('soy un filter')
})

router.get('/:id' ,async (req,res,next)=>{
  const {id} = req.params
  try {
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
} )


//Para recibir el POST
router.post('/',async (req,res)=>{
  const body = req.body
  const create = await service.create(body)
  res.status(201).json(create)
})

//Para hacer el Patch
router.patch('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const update = await service.update(id,body)
    res.json(update)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})
//Delete
router.delete('/:id',async (req,res)=>{
  const {id} = req.params
  const deleted = await service.delete(id)
  res.json(deleted)
})

module.exports = router
