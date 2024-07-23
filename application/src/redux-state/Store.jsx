import { createStore } from "redux";
import CrudReducer from "./Reducer";

const store = createStore(CrudReducer)
export default store;