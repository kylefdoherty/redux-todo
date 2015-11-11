// ACTIONS
// Actions are payloads of information that send data from
// your application to your store. They are the only source
// of information for the store. You send them to the store
// using store.dispatch()

// Actions are plain JavaScript objects. Actions must have a type
// property that indicates the type of action being performed.
// Types should typically be defined as string constants.




// action types
// setting the various action types as constants that map to a string

export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// set an object of the visibility filters to a const

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// ACTION CREATORS
// Action creators are exactly that—functions that create
// actions. It's easy to conflate the terms "action" and
// "action creator," so do your best to use the proper term.

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
