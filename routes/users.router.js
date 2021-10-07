const express = require('express')

const router = express.Router()

//GET: Parametros Query

router.get('/',(req,res)=>{
  const {limit, offset} = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('Falta enviar los parametros')
  }

})


module.exports = router
