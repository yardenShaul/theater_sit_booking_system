import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { theaterReducer } from './reducer/theaterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    theaterModule: theaterReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.myStore = store
