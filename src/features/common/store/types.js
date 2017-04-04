import {makeAction} from 'async-action-creator'

export const addTodo = makeAction('ADD_TODO')
export const toggleTodo = makeAction('TOGGLE_TODO')
export const removeTodo = makeAction('REMOVE_TODO')
export const getFromStorage = makeAction('GET_FROM_STORAGE')
export const saveToStorage = makeAction('SAVE_TO_STORAGE')
