import Vue from 'vue'
import Todo from 'features/common/components/Todo'

describe('Todo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Todo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.todo h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
