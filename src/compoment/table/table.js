import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'
<<<<<<< HEAD
import gridHeaderRowsComponent from './gridHeaderRows.vue'
=======
import grdiHeaderRowsComponent from './gridHeaderRow.vue'
>>>>>>> 7e9e43094898f23c7e2f325778b8167a4d9562a4

const vTable = {
  install: function (Vue) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
<<<<<<< HEAD
    Vue.component('gridHeaderRows', gridHeaderRowsComponent)
=======
    Vue.component('gridHeaderRowsCell', grdiHeaderRowsComponent)
>>>>>>> 7e9e43094898f23c7e2f325778b8167a4d9562a4
  }
}
export default vTable
