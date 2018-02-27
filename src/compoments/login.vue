<template>
  <div class="login">
    <el-row>
      <el-col :span="4" :offset="10">
        <input class="input" placeholder="请输入用户名" v-model="user"></input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="10">
        <input class="input" placeholder="请输入密码" v-model="password" @keyup.enter="login"></input>
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
          // url: '/controller/hello',
          data: {
            user_name: this.user,
            u_passwd: this.password,
            url: 11
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
  .input{
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 32px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
    width: 100%;
  }
</style>
