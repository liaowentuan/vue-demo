import Vue from 'vue' // 引入vue
import promptComponent from './prompt.vue'  // 引入vue组件
const PromptBox = Vue.extend(promptComponent) // 注册

export default (msg, options = {}) => {
  let instance = new PromptBox({
    data: {
      msg,
      options
    }
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  // return instance.vm
}
