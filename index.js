const express = require('express')
const routerApi = require('./routes')
const {logErrors,errorHandler} = require('./middlewares/error.handling')

const app =  express()
const port = 6969


//middleware para recibir el POST
app.use(express.json())

app.get('/',(req, res)=>{
  res.send('Hola mi server en express')
})
app.get('/nueva-ruta',(req, res)=>{
  res.send('Hola soy una nueva ruta')
})

routerApi(app);

//middlewares para recibir errores
app.use(logErrors)
app.use(errorHandler)

app.listen(port,()=>{
  console.log('Mi port' + port)
})
