<template>
  <div class="gridHeader">
    <label v-if="gridHeaderOptions.multiSelect" for="key" class="multiSelectCheckBox gridCell">
      <input type="checkbox" v-model="gridHeaderOptions.selectionAll" id="key" :value="gridHeaderOptions.data">
    </label>
    <div class="gridHeaderCell gridCell" v-for="item in gridHeaderOptions.columnDefs" :name="item.field">
      {{item.displayName}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gridHeaderRows',
    props: ['gridHeaderOptions']
  }
</script>
<style scoped>
.gridHeader{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.gridCell{
  border: 1px solid #000;
  margin-left: -1px;
  height: 100%;
  font-size: 16px;
  padding: 3px 4px;
  min-height: 23px;
  margin-bottom: -1px;
  line-height: 23px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.multiSelectCheckBox{
  min-width: 20px;
  max-width: 20px;
  height: 100%;
}
</style>
