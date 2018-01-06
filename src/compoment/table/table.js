import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'
import grdiHeaderRowsComponent from './gridHeaderRow.vue'

const vTable = {
  install: function (Vue) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
    Vue.component('gridHeaderRowsCell', grdiHeaderRowsComponent)
  }
}
export default vTable
