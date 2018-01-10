import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'
import gridHeaderRowsComponent from './gridHeaderRows.vue'
import modelComponent from './model.vue'

const vTable = {
  install: function (Vue, options) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
    Vue.component('gridHeaderRows', gridHeaderRowsComponent)
    Vue.component('vModel', modelComponent)
    Vue.prototype.$myMethod = (methodOptions) => {
      console.log('haha')
    }
  }
}
export default vTable
