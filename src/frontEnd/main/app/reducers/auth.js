export default (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN_FULFILLED':
      state = {
        ...state,
        isAuthenticated: true
      }
      break
    case 'LOG_OUT':
      state = { isAuthenticated: false }
      break
  }

  return state
}
