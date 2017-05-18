const redux = require('redux')
const thunk = require('redux-thunk').default

import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from './../reducers/index.js'

export let configure = () => {
  let reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  })

  let store = redux.createStore(reducer, redux.compose( // redux.compose let us add middleware functions
    redux.applyMiddleware(thunk), // this middleware teaches redux how to work with actions that are not objects
    // rather they return functions eg fetchLocation() in this case
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
