import tableComponent from './table.vue'
import tableCellComponent from './cell.vue'
import gridHeaderRowsComponent from './gridHeaderRows.vue'
import modelComponent from './model.vue'
import toolTipsComponent from './toolTips.js'

const vTable = {
  install: function (Vue) {
    Vue.component('vTable', tableComponent)
    Vue.component('gridCell', tableCellComponent)
    Vue.component('gridHeaderRows', gridHeaderRowsComponent)
    Vue.component('vModel', modelComponent)
    Vue.prototype.$toopTips = toolTipsComponent
  }
}
export default vTable
