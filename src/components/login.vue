<template>
  <div class="login">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-input placeholder="请输入密码" v-model="password" clearable></el-input>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        user: '',
        password: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    margin-top:300px;
  }
</style>
