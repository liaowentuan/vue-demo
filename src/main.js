// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import vTable from './compoment/table/table.js'

Vue.use(vTable)
Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
// Vue.config.keyCodes.f1 = 112
Vue.config.keyCodes = { // 配置键盘事件
  enter: 13
}
