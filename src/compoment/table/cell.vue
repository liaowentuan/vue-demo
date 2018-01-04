<template>
  <div class="GridCells">
    {{item}}
  </div>
</template>
<script>
  export default {
    name: 'gridCell',
    props: ['item']
    /* computed: {
      itemData: function () {
        let index = this.index
        let keys = this.keys
        let data = this.data
        index.forEach((item, key) => {
          if (item.field === keys) {
            this.shuju = item['displayName']
          }
        })
        if (this.shuju !== '') {
          return data
        }
      }
    } */
  }
</script>
<style scoped>

</style>
