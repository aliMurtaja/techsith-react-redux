import { createStore, combineReducers } from "redux";

import {Reducera} from './Reducera';
import {Reducerb} from './Reducerb';

const rootReducer = combineReducers({
    Ra : Reducera,
    Rb : Reducerb
})

export const Store = createStore(rootReducer);