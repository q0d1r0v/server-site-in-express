// imports
const express = require('express')
const Ddos = require('ddos')
const router = require('./src/routes/index')
const middleWare = require('./src/middleware/middleware')

// server
const server = express()

// ddos
const ddos = new Ddos({
    burst: 10,
    limit: 15
})

// use server
server.use(express.json())
server.use(ddos.express)

// data
const port = 3000

// routes
server.use('/', middleWare, router)

// listen server on port
server.listen(port, () => {
    console.log("Server is running on port " + port)
})