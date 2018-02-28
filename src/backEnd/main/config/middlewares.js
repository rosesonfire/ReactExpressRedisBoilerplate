export default class Middlewares {
  constructor (User, middlewares) {
    this.User = User
    this.middlewares = middlewares
  }

  configurePassport (/* User */) {
    this.middlewares.passport.use(new this.middlewares.PassportStrategy(
      {
        tokenHeader: 'authentication',
        tokenField: 'custom-token'
      },
      (authKey, done) => {
        // const user = User.findOne({ authkey: authKey });

        return done(null, {})
      }
    ))

    return this.middlewares.passport.initialize()
  }

  configureSession () {
    const RedisStore = this.middlewares.connectRedis(this.middlewares.session)
    const redisStoreOptions = {
      host: 'localhost',
      port: '6379'
    }
    const redisStore = new RedisStore(redisStoreOptions)
    const cookie = { maxAge: 3600000 }
    const sessionOptions = {
      store: redisStore,
      secret: 'HSD&*HDjkds&9l2@$(+==-)',
      resave: false,
      saveUninitialized: true,
      cookie
    }
    return this.middlewares.session(sessionOptions)
  }

  setMiddlewares (app) {
    app.use(this.middlewares.bodyParser.json())
    app.use(this.configurePassport(this.User))
    app.use(this.configureSession())
  }
}
