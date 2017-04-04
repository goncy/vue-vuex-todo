import ls from '../../../store/localStorage'

import {addTodo, toggleTodo, removeTodo, getFromStorage, saveToStorage} from './types'

export default {
  [addTodo.type]: (state, payload) => state.todos.push(payload),
  [toggleTodo.type]: (state, payload) => payload.done = !payload.done, //eslint-disable-line
  [removeTodo.type]: (state, payload) => state.todos.splice(state.todos.indexOf(payload), 1),
  [getFromStorage.type]: (state, payload = []) => payload.map(todo => state.todos.push(todo)),
  [saveToStorage.type]: (state, payload) => ls.save(state.todos || [])
}
