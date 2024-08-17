const express = require('express')

const router = require('./src/routes/index.routes')

const app = express() 

app.use(express.json())

app.use(router)

app.listen(8080, () => {
    console.log("Olá, Mundo!")
}) 