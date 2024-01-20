import { createStore } from "redux"

const INITIAL_NOTES = []

const noteReducer = (state = INITIAL_NOTES , action) => {
  if(action.type === 'NEW_NOTE') {
    state.concat(action.data)
    return state
  }

  return state
} 

const store = createStore(
  noteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.getState()