const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/',(req, res)=>{
  const products=[]
  const {size} = req.query
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
    res.json(products)
})

//error comun: Enpoints estaticos que entran en conflicto con Endpoints dinamicos
//Solucion: Ubicarlos antes de los endpoints dinamicos
router.get('/filter',(req,res)=>{
  res.send = ('soy un filter')
})

router.get('/:id' , (req,res)=>{
  const {id} = req.params
  res.json({
    id,
    name:'Jabon',
    price:2000,
    available:true
  })
} )


//Para recibir el POST
router.post('/',(req,res)=>{
  const body = req.body
  res.json({
    message:'created',
    data:body
  })
})

//Para hacer el Patch
router.patch('/:id',(req,res)=>{
  const {id} = req.params
  const body = req.body
  res.json({
    message:'updated',
    data:body,
    id
  })
})
//Delete
router.delete('/:id',(req,res)=>{
  const {id} = req.params
  res.json({
    message:'Deleted',
    id
  })
})

module.exports = router
