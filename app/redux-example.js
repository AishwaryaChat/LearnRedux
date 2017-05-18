const redux = require('redux')

console.log('Statrting redux example')

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

let nextHobbyId = 1
let nextMovieId = 1

let reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'} // ES5 way of passing default parameters

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => action.id !== hobby.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genere: action.genere
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => action.id !== movie.id)
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
