import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'

const vTable = {
  install: function (Vue) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
  }
}
export default vTable
