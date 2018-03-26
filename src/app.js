
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/approuter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (

  <Provider store={store}>
    <AppRouter />
  </Provider>

)

console.log(store.getState());
console.log("running");
ReactDOM.render(jsx, document.getElementById('app'));
