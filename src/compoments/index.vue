<template>
  <div>
    <header>
      <v-table :gridOptions='dataList' class='grid'></v-table>
    </header>
    <nav>
      <button type="button" name="button" @click="modelList.show=!modelList.show">show</button>
      <button type="button" name="button" @click="someMsg">msg</button>
      <button type="button" name="button" @click="prompt">prompt</button>
    </nav>
    <vModel :mOptions="modelList">
        <div slot="body">
          this is body
        </div>
        <div slot="footer">
          this is footer<button type="button" name="button" @click="log">确定</button>
        </div>
        <div slot="header">
          this is modelHeader <button type="button" name="button" @click="modelList.show=!modelList.show">×</button>
        </div>
      </vModel>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: {
        multiSelect: true,
        data: [],
        columnDefs: [
          {field: 'extlib_create_time', displayName: '数据库创建时间'},
          {
            field: 'extlib_name',
            displayName: '数据库名',
            cellTemplate: `
                        <div>
                            <button onclick="alert('123456')">click</button>
                        </div>
                    `
          },
          {
            field: 'extlib_desc',
            displayName: '描述',
            cellTemplate: `
                        <div style='position:relative;z-index=0'>
                            <input type='radio' >
                        </div>
                    `
          }
        ],
        onChagePage: (newPage, newSize) => {
          this.$http({
            method: 'POST',
            url: '/controller/login/user/admin',
            data: {
              user_name: 'admin',
              u_passwd: 'admin'
            }
          }).then((res) => {
            if (res.data.status === true) {
              this.dataList.data = ['haha', 'hehe', 'xixi']
            }
          }).catch(function (res) {
            console.log(res)
          })
        },
        onselection: function (item) {
          console.log(item)
        }
      },
      modelList: {
        width: '500px',
        bgColor: '#fff',
        show: false
      }
    }
  },
  methods: {
    getData () {
      this.$http({
        method: 'POST',
        url: '/controller/login/user/admin',
        data: {
          user_name: 'admin',
          u_passwd: 'admin'
        }
      }).then((res) => {
        if (res.data.status === true) {
          this.dataList.data = ['haha', 'hehe', 'xixi']
        }
      }).catch(function (res) {
        console.log(res)
      })
    },
    log () {
      console.log('123')
    },
    someMsg () {
      let str = Math.random()
      this.$toopTips('tips 插件' + str)
    },
    prompt () {
      this.$promptBox('haha')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
      this.$http({
        method: 'POST',
        url: '/controller/login/user/admin',
        data: {
          user_name: 'admin',
          u_passwd: 'admin'
        }
      }).then((res) => {
        if (res.data.status === true) {
          this.dataList.data = [{'extlib_create_time': '2017-12-05 21:33:58', 'extlib_desc': '运行中', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc5', 'extlib_last_modify': '2017-12-20 15:11:35', 'extlib_name': '布控库1', 'extlib_number_of_target': '1', 'extlib_status': 1, 'src_id': 2}, {'extlib_create_time': '2017-12-21 11:39:34', 'extlib_desc': '阿凡开的是范', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc7', 'extlib_name': '撒谎打开的', 'extlib_status': 1, 'src_id': 1}, {'extlib_create_time': '2017-12-29 14:00:26', 'extlib_desc': '打开真的', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc9', 'extlib_name': '我的', 'extlib_status': 1, 'src_id': 3}]
        }
      }).catch((res) => {
        this.dataList.data = [{'extlib_create_time': '2017-12-05 21:33:58', 'extlib_desc': '运行中', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc5', 'extlib_last_modify': '2017-12-20 15:11:35', 'extlib_name': '布控库1', 'extlib_number_of_target': '1', 'extlib_status': 1, 'src_id': 2}, {'extlib_create_time': '2017-12-21 11:39:34', 'extlib_desc': '阿凡开的是范', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc7', 'extlib_name': '撒谎打开的1111111111111111111111111111111111111111111111111111111111111', 'extlib_status': 1, 'src_id': 1}, {'extlib_create_time': '2017-12-29 14:00:26', 'extlib_desc': '打开真的', 'extlib_id': '4d5d368d-609c-4be3-8c6f-182ab31d0cc9', 'extlib_name': '我的', 'extlib_status': 1, 'src_id': 3}]
      })
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .grid{
    width: 100%;
  }
  .red{
    background: red;
    height:25px;
    display: flex;
    justify-content: space-around;
  }
  .red > span {
    width: 100%;
    text-align:center;
  }
</style>
