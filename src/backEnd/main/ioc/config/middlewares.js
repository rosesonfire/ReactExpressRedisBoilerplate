import Middlewares from './../../config/middlewares'
import bodyParser from 'body-parser'
import passport from 'passport'

exports = module.exports = (User) => {
  let middlewares = null

  try {
    middlewares = new Middlewares(
      User,
      {
        bodyParser: bodyParser,
        passport: passport
      }
    )
  } catch (e) {
    console.error(e.message.error)
  }

  return middlewares
}

exports['@require'] = ['app/models/user']
exports['@singleton'] = true
