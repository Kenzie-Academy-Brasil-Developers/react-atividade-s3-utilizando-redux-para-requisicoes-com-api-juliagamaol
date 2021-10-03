import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import digimonsReduce from "./modules/digimons/reducers";

const reducers = combineReducers({digimons:digimonsReduce})

export const store = createStore(reducers,applyMiddleware(thunk))