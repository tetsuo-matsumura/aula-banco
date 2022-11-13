const express = require('express')
const app = express()

const mongoose = require('mongoose')
const router = require('./src/routers')

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

app.use(router)

mongoose.connect("SUA URL DO MONGO ATLAS")
  .then(() => {
    console.log('✨ Conectado ao banco de dados MongoDB na porta 27017')
  }).catch(error => console.error(error))

app.listen(3030, () => {
  console.log('✨ Servidor rodando na porta 3030')
})