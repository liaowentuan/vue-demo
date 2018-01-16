import Vue from 'vue'
import promptComponent from './prompt.vue'
const PromptBox = Vue.extend(promptComponent)
let instance

export default (msg, options = {}) => {
  instance = new PromptBox({
    data: {
      msg,
      options
    }
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
