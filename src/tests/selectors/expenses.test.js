import selectExpenses from '../../selectors/expenses';
import moment from 'moment';


const expenses = [{
  id: '1',
  description: 'Gem',
  note: '',
  amount: 195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '2',
  description: 'Alemond Milk',
  note: '',
  amount: 30,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('it should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('it should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});



test('it should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('it should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});


test('it should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});
