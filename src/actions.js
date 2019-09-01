export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS'
export const SORT_QUESTIONS = 'SORT_QUESTIONS'

export function addQuestion (question, answer) {
  return {
    type: ADD_QUESTION,
    value: {question, answer}
  }
}
export function removeQuestions () {
  return {
    type: REMOVE_QUESTIONS
  }
}

export function sortQuestions () {
  return {
    type: SORT_QUESTIONS
  }
}
