const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) =>{
    res.send('Welcome')
})


app.listen(port,()=>{console.log(`servidor corriendo en el puerto 3000`)})