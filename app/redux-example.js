const redux = require('redux')

const actions = require('./actions/index')
const store = require('./store/configureStore').configure()

console.log('Statrting redux example')

// Subsribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState()

  if (state.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your location</a>'
  }
  console.log('New state: ', store.getState())
})

// unsubscribe()

let currentState = store.getState()
console.log('Current State: ', currentState)

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Aishwarya'))

store.dispatch(actions.addHobby('dancing'))

store.dispatch(actions.addMovie('Dabang', 'action'))

store.dispatch(actions.changeName('Biyani'))

store.dispatch(actions.addHobby('cooking'))

store.dispatch(actions.addMovie('Jab we met', 'romance'))

store.dispatch(actions.removeHobby(1))

store.dispatch(actions.removeMovie(2))

store.dispatch(actions.changeName('Mrinal'))

store.dispatch(actions.removeHobby(2))
