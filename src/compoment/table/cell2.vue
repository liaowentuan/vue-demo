<script>
  export default {
    name: 'gridCell',
    props: ['item', 'options', 'keys', 'colDef'],
    mounted: function () {},
    render: function (h) {
      return (
        <div class="GridCells">
          { this.item }
        </div>
      )
    }
  }
</script>
<style scoped>
.GridCells{

}
</style>
