const redux = require('redux')

console.log('Statrting redux example')

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'} // ES5 way of passing default parameters

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state // should always return state even if there is no action
  }
}

let store = redux.createStore(reducer, redux.compose( // redux.compose let us add middleware functions
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// Subsribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState()
  console.log('Name is: ', state.name)
  document.getElementById('app').innerHTML = state.name
})

// unsubscribe()

let currentState = store.getState()
console.log('Current State: ', currentState)

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aishwarya'
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Biyani'
})
