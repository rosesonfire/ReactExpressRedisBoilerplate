const init = {
  pages: []
};

export default (state=init, action) => {

  const payload = action.payload;

  switch(action.type) {
    case "LOG_IN_FULFILLED":
      state = {
        ...state,
        pages: payload.pages
      };
      break;
    case "LOG_OUT":
      state = init;
      break;
  }

  return state;

};