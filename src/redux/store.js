import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


// Reducers
import app from './app/reducer';


const mainReducer = combineReducers({
  app,
});



const configureStore = () => {
  return createStore(mainReducer, applyMiddleware(thunk));
}

export default configureStore;
