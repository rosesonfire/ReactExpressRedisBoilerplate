import Middlewares from './../../config/middlewares'
import bodyParser from 'body-parser'
import passport from 'passport'
import { Strategy as PassportStrategy } from 'passport-accesstoken'
import session from 'express-session'
import connectRedis from 'connect-redis'

exports = module.exports = (User) => {
  let middlewares = null

  try {
    middlewares = new Middlewares(
      User,
      {
        bodyParser,
        passport,
        PassportStrategy,
        session,
        connectRedis
      }
    )
  } catch (e) {
    console.error(e.message.error)
  }

  return middlewares
}

exports['@require'] = ['app/models/user']
exports['@singleton'] = true
