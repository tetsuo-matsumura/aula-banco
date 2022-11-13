const express = require('express')
const router = express.Router()

const UserController = require("../controllers/UserController")

router
  .post('/user', UserController.createUser)
  .get('/user', UserController.getAll)
  .get('/user/:userId', UserController.getById)
  .delete('/user/:userId', UserController.deleteById)
  .put('/user/:userId', UserController.updateById)
  .put('/user/:userId/verify', UserController.verifyById)

module.exports = router