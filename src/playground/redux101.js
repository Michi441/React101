

import { createStore } from 'redux';

const increaseCount = ({ increaseBy = 1 } = {}) => ({
  type: 'INCREASE',
  increaseBy
});

const decreaseCount = ({ decreaseBy = 1 } = {}) => ({
  type: 'DECREASE',
  decreaseBy
});

const countReducer = (state = { count: 0 }, action) => {

  switch(action.type){

    case 'INCREASE':
      return{
        count: state.count + action.increaseBy
      };
    case 'DECREASE':
      return{
        count: state.count - action.decreaseBy
      };

    case 'RESET':
      return{
        count: state.count = 0
      };
    default:
      return state;
  }


}

const store = createStore(countReducer)

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(increaseCount({ increaseBy: 5 }))

store.dispatch(increaseCount({ increaseBy: 0}))

store.dispatch(decreaseCount({ decreaseBy: 3 }))

unsubcribe();
