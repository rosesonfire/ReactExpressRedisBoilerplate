import { fetchPages } from './../services/pages'
import { fetchUserData } from './../services/fb'

const loginPayload = async () => {
  const pages = await fetchPages()
  const userData = await fetchUserData()

  return { pages, userData }
}

export const login = (dispatch) => {
  const type = 'LOG_IN'
  const payload = loginPayload()
  const action = { type, payload }

  dispatch(action)
}

export const logout = {
  type: 'LOG_OUT'
}
