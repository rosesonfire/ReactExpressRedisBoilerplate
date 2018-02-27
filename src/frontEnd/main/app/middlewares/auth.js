export default store => next => action => {

  const state = store.getState();
  const authState = state.auth;
  const isAuthenticated = authState.isAuthenticated;
  const actionType = action.type;

  if (isAuthenticated) {
    if (actionType !== "LOG_IN" && actionType !== "LOG_IN_FULFILLED") {
      next(action);
    } else {
      console.error("Action prevented due to authentication state error.", actionType);
    }
  } else if (isAuthenticated === false){
    if (actionType === "LOG_IN" || actionType === "LOG_IN_FULFILLED") {
      next(action);
    } else {
      console.error("Action prevented due to authentication state error.", actionType);
    }
  } else {
    next(action);
  }

};