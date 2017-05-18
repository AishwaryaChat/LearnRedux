const redux = require('redux')

console.log('Statrting redux example')

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

let nextHobbyId = 1
let nextMovieId = 1

let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          hobby: action.hobby,
          id: nextHobbyId++
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => {
        return hobby.id !== action.id
      })
    default:
      return state
  }
}

let moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          movie: action.movie,
          id: nextMovieId++
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => {
        return action.id !== movie.id
      })
    default:
      return state
  }
}

let reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

let store = redux.createStore(reducer, redux.compose( // redux.compose let us add middleware functions
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// Subsribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState()
  // console.log('Name is: ', state.name)
  document.getElementById('app').innerHTML = state.name
  console.log('New state: ', store.getState())
})

// unsubscribe()

let currentState = store.getState()
console.log('Current State: ', currentState)

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aishwarya'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'dancing'
})

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Dabang',
  genere: 'action'
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Biyani'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'cooking'
})

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Jab we met',
  genere: 'romance'
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mrinal'
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
})
