const redux = require('redux')

console.log('Statrting redux example')

// Name reducer and action generator
// ---------------------------------
let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// Hobbies reducer and action generator
// -----------------------------------
let nextHobbyId = 1
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

let addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// Movies reducer and action generator
// ----------------------------------
let nextMovieId = 1
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

let addMovie = (movie, genere) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genere
  }
}

let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
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

store.dispatch(changeName('Aishwarya'))

store.dispatch(addHobby('dancing'))

store.dispatch(addMovie('Dabang', 'action'))

store.dispatch(changeName('Biyani'))

store.dispatch(addHobby('cooking'))

store.dispatch(addMovie('Jab we met', 'romance'))

store.dispatch(removeHobby(1))

store.dispatch(changeName('Mrinal'))

store.dispatch(removeHobby(2))
