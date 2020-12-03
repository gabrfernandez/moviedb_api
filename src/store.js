import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {moviesReducer} from './reducers/moviesReducer'
import { detailReducer } from './reducers/detailReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    detail: detailReducer,
})


const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store