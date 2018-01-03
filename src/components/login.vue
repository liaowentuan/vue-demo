<template>
  <div class="login">
    <el-row>
      <el-col :span="4" :offset="10">
        <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="10">
        <el-input placeholder="请输入密码" v-model="password" clearable></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="10" class="text-center">
        <el-button type="primary" size="medium" @click="login()">登录</el-button>
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
    },
    methods: {
      login () {
        this.$http({
          method: 'POST',
          url: '/controller/login/user/admin',
          data: {
            user_name: this.user,
            u_passwd: this.password
          }
        }).then(function (res) {
          if (res.data.status === true) {
            window.location.href = '#/index'
          }
        }).catch(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    margin-top:400px;
  }
  .el-col{
    margin-bottom: 10px;
  }
  .el-button{
    width: 100%;
  }
</style>
