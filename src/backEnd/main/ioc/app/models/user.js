import user from './../../../app/models/user'
import userSchema from './../../../../../dataAccess/schemas/user'

exports = module.exports = (db) => {
  let User = null

  try {
    User = user(db, userSchema)
  } catch (e) {
    console.error(e.message.error)
  }

  return User
}

exports['@require'] = ['lib/db']
exports['@singleton'] = true
