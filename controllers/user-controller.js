const jwt = require('jsonwebtoken')
const {users: Users} = require('../models')
const promiseHandler = require('../promiseHandler')
require(dotenv).config()

const secret = process.env.secret

const createUser =  (req, res) => {
  console.log(req.body)
  const {email, password} = req.body
  Users.create({email, password})
  .then(userDB => res.json(userDB))
  .catch(err => {
    res.json(err)
    console.log(err)
  })
}

const loginUser = async (req, res) => {
  const {email, password} = req.body

const [userErr, userInfo] = await handle(Users.findOne({
  where: {email: email}
}))
if(userErr){
  console.log(userErr)
  res.status(500).json({
    error: 'An internal error occured.'
  })
}else if(!userInfo){
  res.status(401).json({
    error: 'email not found.'
  })
}else{
  const [pwErr, pwMatch] = await handle(userInfo.validPW(password))
    if(pwErr){
      res.status(500).json({
        error: 'An internal error occured.'
      })
    }else if (!pwMatch){
      res.status(401).json({
        error: 'Passwords do not match.'
      })
    }else{
      const payload = {
        id: userInfo.id,
        email: userInfo.email
      }
      const toekn = jwt.sign(payload, secret, {
        expiresIn: '30min'
      })
      res.cookie('token', token, { httpOnly: true}).status(200).json(token)
    }
  }
}

const findUser = async (req, res) => {
  const [error, user] = await handle(Users.findOne({
    where: {
      id: req.id
    }
  }))

  if(error){
    res.status(500).json(userErr)
  }else{
    res.status(200).json(user)
  }
}

module.exports = {
  createUser,
  loginUser,
  findUser
}