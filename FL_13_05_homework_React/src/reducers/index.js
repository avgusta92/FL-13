import { createStore, combineReducers } from "redux";
import courses from "./courses";
import editMode from "./edit-mode";

const rootReducer = combineReducers({
  courses: courses,
  editMode: editMode,
});

const store = createStore(rootReducer);

export default store;
