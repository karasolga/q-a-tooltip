import { combineReducers } from 'redux'
import { ADD_QUESTION, REMOVE_QUESTIONS, SORT_QUESTIONS } from './actions'

const initialState = []

function questions(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [...state, action.value]
    case REMOVE_QUESTIONS:
      return initialState
    case SORT_QUESTIONS:
      let newState = state.sort((a, b) =>
        a.question > b.question ? 1 : a.question < b.question ? -1 : 0,
      )
      return [...newState]
    default:
      return state
  }
}

export default combineReducers({
  questions,
})
