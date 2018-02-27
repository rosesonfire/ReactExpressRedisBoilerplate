import { Strategy as TokenStrategy } from 'passport-accesstoken'

export default class Middlewares {
  constructor (User, middlewares) {
    this.User = User
    this.middlewares = middlewares
  }

  configurePassport (/* User */) {
    this.middlewares.passport.use(new TokenStrategy(
      {
        tokenHeader: 'authentication',
        tokenField: 'custom-token'
      },
      (authKey, done) => {
        // const user = User.findOne({ authkey: authKey });

        return done(null, {})
      }
    ))
  }

  setMiddlewares (app) {
    this.configurePassport(this.User)

    app.use(this.middlewares.bodyParser.json())
    app.use(this.middlewares.passport.initialize())
  }
}
