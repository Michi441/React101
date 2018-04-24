import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('it should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };

  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('it should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'START_DATE',
    startDate
  };

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('it should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'END_DATE',
    endDate
  };

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
