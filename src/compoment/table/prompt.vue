<template>
  <div class="promptBox" @click="close">
    <div class="promptBoxBody">
      {{msg}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'promptBox',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      close: () => {
        let child = document.getElementsByClassName('promptBox')
        child[0].parentNode.removeChild(child[0])
      }
    }
  }
</script>
<style scoped>
.promptBox{
  position: fixed;
  background: rgba(0,0,0,0.3);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
}
  .promptBoxBody{
    width: 500px;
    margin:100px auto;
  }
</style>
