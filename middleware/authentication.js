const jwt = require('jsonwebtoken')
require(dotenv).config()

const secret = process.env.secret

const authentication = (req, res, next) => {
  let token = 
  req.body.token ||
  req.query.token ||
  req.headers('x-access-token') ||
  req.headers.authorization ||
  req.cookies.token

  if(req.headers.authorization){
    token = token
    .split(' ')
    .pop()
    .trim()
  }

  if(!token){
    res.status(401).send('No token provided')
  }else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err){
        res.status(401).json({
          success: false,
          message: 'Invalid token'
        })
      }else {
        req.email = decoded.email
        req.id = decoded.id
        next()
      }
    })
  }
}

module.exports = authentication