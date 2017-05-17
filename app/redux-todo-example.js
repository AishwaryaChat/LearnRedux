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

let store = redux.createStore(reducer)
console.log('currentState": ', store.getState())

store.dispatch({
  type: 'CHANGE-SEARCH-TEXT',
  searchText: 'Hey Everybody'
})

console.log('search-text should be "Hey Everybody": ', store.getState())
