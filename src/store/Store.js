import {createStore, combineReducers } from 'redux';

import expensifyReducer from './../reducers/ExpensifyReducer';
import filtersReducer from './../reducers/FilterReducer';



export default () => {
  const store = createStore(combineReducers({
      expenses: expensifyReducer,
      filters: filtersReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  //  for redux developer tools
  return store;
} 


