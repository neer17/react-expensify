import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from './store/Store';
import addExpense from './actions/AddExpense';
import setTextFilter from './filters/SetTextFilter';
import getVisibleExpenses from './selector/GetVisibleExpenses';

//
const store = configureStore();

//
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//
store.dispatch(addExpense({description: 'Water Bill', amount: 1000}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(addExpense({ description: 'Rent', createdAt: 100}));

//
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));