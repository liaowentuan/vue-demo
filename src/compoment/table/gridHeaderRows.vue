<template>
  <div class="table-tr">
    <label v-if="gridHeaderOptions.multiSelect" for="key" class="table-td table-label">
      <input type="checkbox" v-model="gridHeaderOptions.selectionAll" id="key" :value="gridHeaderOptions.data">
    </label>
    <div class="table-td" v-for="item in gridHeaderOptions.columnDefs" :name="item.field">
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
