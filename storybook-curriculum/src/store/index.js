import { createStore, combineReducers } from 'redux' // applyMiddleware
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import toDo from './toDo'

const reducer = combineReducers({
  toDo,
})

// const middleware = composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })))
const store = createStore(reducer, composeWithDevTools());

export default store

