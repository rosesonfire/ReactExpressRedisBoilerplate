import { combineReducers } from "redux";
import auth from "./auth";
import pages from "./pages";
import fb from "./fb";

const reducers = combineReducers({
  auth,
  pages,
  fb
});

export default reducers;
