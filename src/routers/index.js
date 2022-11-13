const express = require('express')
const router = express.Router()

const UserRouter = require('./UserRouter')

router.use(UserRouter)

module.exports = router