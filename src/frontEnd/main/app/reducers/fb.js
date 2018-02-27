export default (state={}, action) => {

  const payload = action.payload;

  switch(action.type) {
    case "LOG_IN_FULFILLED":
      state = {
        ...state,
        userName: payload.userData.name,
        profilePicture: payload.userData.picture.data.url
      };
      break;
    case "LOG_OUT":
      state = {};
      break;
  }

  return state;

};