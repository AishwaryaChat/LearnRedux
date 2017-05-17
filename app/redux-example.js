const redux = require('redux')

console.log('Statrting redux example')

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'} // ES5 way of passing default parameters

  console.log('New action: ', action)
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }

  return state // should always return state even if there is no action
}

let store = redux.createStore(reducer)

let currentState = store.getState()
console.log('Current State: ', currentState)

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aishwarya'
})

console.log('Name should Be Aishwarya: ', store.getState())
