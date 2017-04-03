<template>
  <div class="hello">
    <h2>Things TODO</h2>
    <h3 @click="addTodo('Clicked')"></h3>
    <ul>
      <li v-for="todo in todos" @click="toggleTodo(todo)">
        <span v-if="todo.done" class="del-btn" @click="removeTodo(todo)">x</span>
        <span :class="todo.done ? 'underlined' : ''">
          {{todo.text}}
        </span>
      </li>
    </ul>
    <input type="text" placeholder="TODO text" v-on:keyup.enter="submitTodo" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {addTodo, toggleTodo, removeTodo} from '../../store/types'

export default {
  name: 'hello',
  methods: {
    ...mapActions({
      addTodo: addTodo.type,
      toggleTodo: toggleTodo.type,
      removeTodo: removeTodo.type
    }),
    submitTodo (event) {
      this.addTodo(event.target.value)
      event.target.value = ''
    }
  },
  computed: mapGetters({
    todos: 'getTodos'
  })
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.underlined {
  text-decoration: line-through;
}

.del-btn {
  cursor: pointer;
  font-size: large;
}
</style>
