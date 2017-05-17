const redux = require('redux')

console.log('Statrting redux example')

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'} // ES5 way of passing default parameters
  return state // should always return state even if there is no action
}

let store = redux.createStore(reducer)

let currentState = store.getState()
console.log('Current State: ', currentState)
