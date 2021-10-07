const express = require('express')

const router = express.Router()

router.get('/:id' , (req,res)=>{
  const {id} = req.params
  res.json({
    id,
    name:'Limpieza',
    products:13
  })
} )
router.get('/:categoryId/products/:productID',(req,res)=>{
  const { categoryId , productID} = req.params;
  res.json({
    categoryId,
    productID
  })
})

module.exports = router
