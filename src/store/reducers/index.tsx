import { combineReducers } from "redux";
import spellReducer from "./spellReducer";

const reducers = combineReducers({
  fav: spellReducer,
});

export default reducers;
export type ReducerType = ReturnType<typeof reducers>;
