import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'
import gridHeaderRowsComponent from './gridHeaderRows.vue'

const vTable = {
  install: function (Vue) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
    Vue.component('gridHeaderRows', gridHeaderRowsComponent)
  }
}
export default vTable
