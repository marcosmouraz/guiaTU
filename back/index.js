const express = require('express')
const  cors = require('cors')

const router = require('./src/routes/index.routes')

const app = express() 

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(8080, () => {
    console.log("Olá, Mundo!")
}) 