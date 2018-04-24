import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  })
});


test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'New note value'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1500,
    createdAt: 1500,
    note: 'Monthly Rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () =>{
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    }
  });
});
