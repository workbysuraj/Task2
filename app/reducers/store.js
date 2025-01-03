import { createStore } from "redux";
import rootReducer from "../reducers"; // make sure this points to the right location

const store = createStore(rootReducer);

export default store;
