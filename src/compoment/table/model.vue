<template>
  <div class="model-context" v-show="mOptions.show" @click="mOptions.show=false">
    <div :style="{width:mOptions.width,background:mOptions.bgColor}" class="model-body" @click.stop="">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="body"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vModel',
    props: {
      mOptions: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style scoped>
.model-context{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.7);
}
.model-body{
  background:#fff;
  margin: 100px auto 0;
  box-shadow: 6px 6px 3px #333;
}
.model-body header{
  height:40px;
  border-bottom:1px solid #ddd;
  line-height:40px;
  text-align:center;
}
.model-body header button {
  display:block;
  float:right;
  margin-top:8px;
  margin-right:8px;
  background:#ddd;
  border:0;
  width:24px;
  height:24px;
  border-radius:5px;
  font-size:20px;
  line-height:20px;
  color:#fff;
  cursor:pointer;
}
.model-body footer{
  height:40px;
  border-top:1px solid #ddd;
  line-height:40px;
  text-align:center;
}
</style>
