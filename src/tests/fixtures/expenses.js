import moment from 'moment';

export default [{
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
