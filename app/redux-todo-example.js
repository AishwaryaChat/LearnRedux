const redux = require('redux')
console.log('Starting todo App')

let stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

let reducer = (state = stateDefault) => {
  return state
}

let store = redux.createStore(reducer)

let currentState = store.getState()
console.log(currentState)
