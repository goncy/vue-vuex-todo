import {makeAction} from 'async-action-creator'

export const addTodo = makeAction('ADD_TODO')
export const toggleTodo = makeAction('TOGGLE_TODO')
export const removeTodo = makeAction('REMOVE_TODO')
