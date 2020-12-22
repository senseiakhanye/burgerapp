import priceListReducer from './Reducers/pricelistReducer';
import ingredientReducer from './Reducers/ingredientsReducer';
import authorizedReducer from './Reducers/authReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Example of middleware.
const logger = () => {
  return next => {
    return action => {
      // console.log(`[Middleware] `, action);
      const result = next(action);
      // console.log(`Store `, store.getState());
      return result;
    }
  }
}

const rootReducer = combineReducers({
  auth: authorizedReducer,
  price: priceListReducer,
  ingredients: ingredientReducer});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;