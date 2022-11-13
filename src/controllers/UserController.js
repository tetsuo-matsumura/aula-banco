const User = require("../models/UserModel")

const UserController = {}

UserController.createUser = (req, res) => {
  const { phone, displayName } = req.body

  User.create({ phone, displayName }, (error, newUser) => {
    if (error) res.status(422).json({
      message: "Ocorreu um erro!",
      error,
    })
    
    res.json({
      message: "Usuário criado",
      payload: newUser
    })
  })
}

UserController.getAll = (req, res) => {
  User.find({}, (error, users) => {
    if (error) res.status(422).json({
      message: "Ocorreu um erro!",
      error,
    })

    res.json({
      payload: users
    })
  })
}

// user/:userId
UserController.getById = (req, res) => {
  const { userId } = req.params
  User.findById(userId, (error, user) => {
    User.find({}, (error, users) => {
      if (error) res.status(422).json({
        message: "Ocorreu um erro!",
        error,
      })
  
      res.json({
        payload: user
      })
    })
  })
}

UserController.deleteById = (req, res) => {
  const { userId } = req.params
  User.deleteOne({ _id: userId }, (error) => {
    if (error)  res.status(422).json({
      message: "Ocorreu um erro!",
      error,
    })

    res.json({
      message: "Usuário deletado"
    })
  })
}

UserController.updateById = (req, res) => {
  const { userId } = req.params
  const { phone, displayName } = req.body
  User.updateOne({ _id: userId }, { phone, displayName }, (error, updatedUser) => {
    if (error)  res.status(422).json({
      message: "Ocorreu um erro!",
      error,
    })

    res.json({
      message: "Usuário atualizado",
      payload: updatedUser
    })
  })
}

UserController.verifyById = (req, res) => {
  const { userId } = req.params
  User.updateOne({ _id: userId }, { verified: true }, (error, verifiedUser) => {
    if (error)  res.status(422).json({
      message: "Ocorreu um erro!",
      error,
    })

    res.json({
      message: "Usuário verificado",
      payload: verifiedUser
    })
  })
}

module.exports = UserController