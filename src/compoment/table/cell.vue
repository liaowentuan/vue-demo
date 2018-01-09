<template>
  <div class="GridCells">
    <slot>{{this.item}}</slot>
  </div>
</template>

<script>
  export default {
    name: 'gridCell',
    props: ['item', 'options', 'keys', 'colDef']
  }
</script>
<style scoped>
.GridCells{

}
</style>
