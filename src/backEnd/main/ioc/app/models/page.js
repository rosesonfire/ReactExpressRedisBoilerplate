import page from './../../../app/models/page'
import pageSchema from './../../../../../dataAccess/schemas/page'

exports = module.exports = (db) => {
  let Page = null

  try {
    Page = page(db, pageSchema)
  } catch (e) {
    console.error(e.message.error)
  }

  return Page
}

exports['@require'] = ['lib/db']
exports['@singleton'] = true
