<template>
  <div class="gridHeaderRow">
    <label v-if="gridOptions.multiSelect" for="key" class="multiSelectCheckBox gridCell">
      <input type="checkbox" v-model="gridOptions.selectionAll" id="key" :value="gridOptions.data">
    </label>
    <div class="gridHeaderCell gridCell" v-for="item in gridOptions.columnDefs" :name="item.field">
      <span>{{item.displayName}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gridCell',
    props: ['gridOptions'],
    mounted: function () {
      this.$nextTick(function () {
        let list = document.getElementsByClassName('gridHeaderRow')['0'].children
        let arr = []
        for (let i = 1; i < list.length; i++) {
          arr.push(list[i].clientWidth)
        }
        this.gridOptions.bodyWidth = arr
        this.gridOptions.selectionWidth = list[0].clientWidth - 8 + 'px'
      })
    }
  }
</script>
<style scoped>
  .gridHeaderCell{
    border:1px solid #000;
    margin-left:-1px;
  }
  .gridHeaderRow{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .gridHeaderRow div{
    width: 100%;
    text-align: center;
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
  .multiSelectCheckBox{
    width: 22px;
    height: 100%;
  }
</style>
