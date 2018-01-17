<template>
  <div class="table" v-if="gridOptionsList">
    <!--grid头部-->
    <gridHeaderRows :gridHeaderOptions="gridOptionsList"></gridHeaderRows>
    <!--grid主体-->
      <!--grid表格-->
    <div v-for="(items,rowIndex) in gridOptionsList.data"  class="table-tr" :key="rowIndex">
      <!--grid复选框-->
      <label v-if="gridOptionsList.multiSelect" class="table-td table-label" >
        <input type="checkbox" v-model="gridOptionsList.selection" :id="rowIndex" :value="items">
      </label>
      <!--gridCell-->
      <gridCell v-for="(item,columnIndex) in format(items,gridOptionsList.columnDefs)" :options="gridOptionsList" :key="columnIndex" :rowIndex="rowIndex" class="table-td" :columnIndex="columnIndex" :item="item"></gridCell>
    </div>
    <!--grid脚部-->
    <div class="gridFooter row">

    </div>
  </div>
</template>
<script>
  function formatTrue (item, obj) {
    for (let i in obj) { // data 默认为空数组
      if (i === 'data') {
        break
      }
      obj.data = []
    }
    for (let i in item) {
      obj[item[i]] = obj[item[i]] === undefined ? true : obj[item[i]]
    }
    return obj
  }
  function formatFalse (item, obj) {
    for (let i in item) {
      obj[item[i]] = obj[item[i]] ? obj[item[i]] : false
    }
    return obj
  }
  function init (obj) {
    obj['selection'] = []
    obj['selectionAll'] = []
    return obj
  }
  export default {
    name: 'v-table',
    props: ['gridOptions'],
    computed: {
      gridOptionsList: function () {
        let grid = this.gridOptions
        // 确保有data循环
        grid = formatTrue(['multiSelect', 'enableHorizontalScrollbar', 'enableVerticalScrollbar', 'enableRowHeaderSelection'], grid) // 设置默认选项true
        grid = formatFalse(['useExternalSorting', 'enableSorting', 'useExternalSorting', 'enableGridMenu', 'enableColumnMenus'], grid) // 设置默认选项false
        grid = init(grid)
        return grid
      }
    },
    methods: {
      format: (items, columnDefs) => {
        let arr = []
        for (let i in columnDefs) {
          if (columnDefs[i].field || columnDefs[i].name) {
            let str = columnDefs[i].field
            arr.push(str)
          }
        }
        for (let i in items) {
          for (let c in arr) {
            if (arr[c] === i) {
              arr[c] = items[i] // 替换
            }
          }
        }
        return arr
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        let arr = []
        for (let i in this.gridOptionsList.columnDefs) {
          let str = this.gridOptionsList.columnDefs[i]['field']
          arr.push(document.getElementsByName(str))
        }
        console.log(arr)
      })
    }
  }
</script>
<style scoped>
  .table{
    width: 100%;
    display: table;
    border-bottom:1px solid #ddd;
    border-right:1px solid #ddd;
  }
  .table-tr{
    display: table-row;
  }
  .table-td{
    text-align: center;
    display: table-cell;
    border-top:1px solid #ddd;
    border-left:1px solid #ddd;
  }
  .table-label{
    width: 40px;
  }
</style>
