import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {moviesReducer} from './reducers/moviesReducer'

const rootReducer = combineReducers({
    movies: moviesReducer,
})

const initialState={
    popular:[],
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store