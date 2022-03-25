import { combineReducers, createStore, applyMiddleware } from 'redux'
import { photoReducer } from './reducers/photoReducer'
import thunk from 'redux-thunk' 
import { loaderReducer } from './reducers/loaderReducer'

const rootReducer = combineReducers({
  photo: photoReducer,
  loading: loaderReducer
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)