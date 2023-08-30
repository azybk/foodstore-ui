import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import authReducer from '../features/Auth/reducer'
import thunk from "redux-thunk";

const composerEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducers = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducers, composerEnhacer(applyMiddleware(thunk)))

export default store