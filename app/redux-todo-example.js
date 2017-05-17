const redux = require('redux')
console.log('Starting todo App')

let stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

let reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE-SEARCH-TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

console.log('currentState": ', store.getState())

// subscribe to changes
let unsubscribe = store.subscribe(() => {
  const state = store.getState()
  console.log('New searchText is: ', state.searchText)
  document.getElementById('app').innerHTML = state.searchText
})

store.dispatch({
  type: 'CHANGE-SEARCH-TEXT',
  searchText: 'Hey Aishwarya'
})

store.dispatch({
  type: 'CHANGE-SEARCH-TEXT',
  searchText: 'Hey Biyani'
})

// console.log('search-text should be "Hey Everybody": ', store.getState())
