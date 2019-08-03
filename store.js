import { createStore } from 'redux'

const reduxStore = {
    item: "Ellie",
    count: 0
}

function counter(state = reduxStore, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, count: state.count + 1}
      case 'DECREMENT':
        return {...state, count: state.count - 1}
      case 'CLEAR':
        return {...state, count: 0}
      default:
        return state
    }
  }

export const  store = createStore(counter)