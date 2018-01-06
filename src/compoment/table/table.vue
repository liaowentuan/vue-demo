<template>
  <div class="ui-grid" v-if="gridOptionsList">
    <!--grid头部-->
    <div class="gridHeader row">
      <gridHeaderRowsCell :gridOptions="gridOptionsList"></gridHeaderRowsCell>
    </div>
    <!--grid主体-->
    <div class="gridBody row">
      <!--grid表格-->
      <div v-for="(items,key) in gridOptionsList.data">
        <div class="row">
          <!--grid复选框-->
          <label v-if="gridOptionsList.multiSelect" :for="key" :style="{width:gridOptionsList.selectionWidth}" class="multiSelectCheckBox gridCell">
            <input type="checkbox" v-model="gridOptionsList.selection" :id="key" :value="items">
          </label>
          <!--gridCell-->
          <gridCell v-for="(item,index) in format(items,gridOptionsList.columnDefs)" :title="item" :name="bindName(item,items,gridOptionsList.columnDefs)" :item="item" :key="index" class="gridCell" :style="{width:gridOptionsList.bodyWidth[index] - 8 + 'px','text-align':'center'}"></gridCell>
        </div>
      </div>
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
      },
      bindName: function (item, data, indexData) {

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
  .ui-grid{
    width: 100%;
    padding-bottom: 1px;
  }
  .row::before{
    content: "";
    display: table;
  }
  .row::after{
    content: "";
    display: table;
    clear: both;
  }
  .multiSelectCheckBox{
    width: 22px;
    height: 100%;
  }
  .gridCell{
    border: 1px solid #000;
    margin-left: -1px;
    height: 100%;
    font-size: 16px;
    vertical-align: baseline;
    float: left;
    padding: 3px 4px;
    min-height: 23px;
    margin-bottom: -1px;
    line-height: 23px;
  }
</style>
