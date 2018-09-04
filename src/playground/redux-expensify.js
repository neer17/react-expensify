import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//  subscribing
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

//  dispatching actions
const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'This is the final rent', amount: 2033, createdAt: 300}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', note: 'This is the mocha', amount: 100, createdAt: 200 }));

//  removing the expenseOne
store.dispatch(removeExpense({id: expenseOne.expense.id}));

//  editing the expenseTwo
store.dispatch(editExpense({id: expenseTwo.expense.id, updates: 'This is the updated description'}));

//  setTextFilter
store.dispatch(setTextFilters('re'));



//  sortByAmount
store.dispatch(sortByAmount());

//  setStartDate
store.dispatch(setStartDate(10));

//  setEndDate
store.dispatch(setEndDate(500));

//  sortByDate
store.dispatch(sortByDate());