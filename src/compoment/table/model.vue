<template>
  <div class="model-context" v-show="mOptions.show" @click="mOptions.show=false">
    <div :style="{width:mOptions.width,background:mOptions.bgColor}" class="model-body" @click="">
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
  background: rgba(255, 0, 0, 0.5);
}
.model-body{
  background:#fff;
  margin: 100px auto 0;
}
</style>
