// Name reducer
export let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

// Hobbies reducer
let nextHobbyId = 1
export let hobbiesReducer = (state = [], action) => {
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

// Movies reducer
let nextMovieId = 1
export let moviesReducer = (state = [], action) => {
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

// Map reducer
export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state
  }
}
