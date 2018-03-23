import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// LEFT OFF
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 }) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Set TextFilter

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate) => ({
  type: 'START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'END_DATE',
  endDate
});

const expensesReducerDefaultState = [];

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}




const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return[
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
    return state.filter(({ id }) => id !== action.id);


    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
        return {
          ...expense,
          ...action.updates
        };
      } else {
        return expense;
      };
      });


    default:
      return state;
  }
}

const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){

    case 'SET_TEXT_FILTER':
      return{
        ...state,
        text: action.text
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'START_DATE':
      return{
        ...state,
        startDate: action.startDate
      };

    case 'END_DATE':
      return{
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b ) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer

  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 3100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Limonade', amount: 9500, createdAt: 1000}));
store.dispatch(sortByAmount());

//store.dispatch(setTextFilter('limonade'));
//store.dispatch(setStartDate(-125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

//
// const demo = {
//   expenses: [{
//     id: 'dkaskdlsajd',
//     description: 'January Rent',
//     note: 'This was a payment!',
//     amount: 32300,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// }
