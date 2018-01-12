<template>
  <div class="GridCells">
    <slot>{{item}}</slot>
  </div>
</template>

<script>
  export default {
    name: 'gridCell',
    props: ['rowIndex', 'columnIndex', 'options', 'item']
    /* methods: {
      format () {
        debugger
        console.log('grid-' + this.rowIndex + '-' + this.columnIndex)
        return 'grid-' + this.rowIndex + '-' + this.columnIndex
      }
    } */
  }
</script>
<style scoped>
.GridCells{

}
</style>
