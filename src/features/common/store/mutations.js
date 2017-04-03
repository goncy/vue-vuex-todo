import {addTodo, toggleTodo, removeTodo} from './types'

export default {
  [addTodo.type]: (state, payload) => state.todos.push(payload),
  [toggleTodo.type]: (state, payload) => payload.done = !payload.done, //eslint-disable-line
  [removeTodo.type]: (state, payload) => state.todos.splice(state.todos.indexOf(payload), 1)
}
