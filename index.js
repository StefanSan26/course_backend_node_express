const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const {logErrors,errorHandler,boomErrorHandler,queryErrorHandler} = require('./middlewares/error.handling')

const app =  express()
const port = process.env.PORT || 6969    //si heroku trae la variable de entorno pues correrlo en ese puerto, en caso que no correrlos en el puerto 6969


//middleware para recibir el POST
app.use(express.json())
//middleware para habilitar a cualquier dominio
// app.use(cors())

const whitelist=['http://localhost:8080','http://localhost:6969/','https://myapp.co']
const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    }else{
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))


app.get('/',(req, res)=>{
  res.send('Hola mi server en express')
})
app.get('/nueva-ruta',(req, res)=>{
  res.send('Hola soy una nueva ruta')
})

routerApi(app);

//middlewares para recibir errores
app.use(logErrors)
app.use(queryErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port,()=>{
  console.log('Mi port' + port)
})
