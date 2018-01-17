<template>
  <div class="table">
    <div class="table-tr" v-for="(items, i) in msgData" :key="i">
      <div class="table-td" v-for="(item, keys) in items" :key="keys">
        {{keys}}-{{item}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tableCell',
    data () {
      return {
        msgData: [
          {index: 12, msg: 'someError5asdfas1df231a'},
          {index: 1, msg: 'someError4'},
          {index: 2, msg: 'someError3'},
          {index: 3, msg: 'someError2'},
          {index: 4, msg: 'someError1'}
        ]
      }
    }
  }
</script>
<style>
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
</style>
