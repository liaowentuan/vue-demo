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
          {
            field: 'extlib_name',
            displayName: '数据库名'
          },
          {
            field: 'extlib_desc',
            displayName: '描述'
          },
          {field: 'extlib_create_time', displayName: '数据库创建时间'},
          {field: 'extlib_create_time', displayName: '操作'}
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
    getData (page, size) {
      this.$http({
        method: 'GET',
        url: '/controller/extlibs?extlib_name=&page=' + page + '&pagesize=' + size
      }).then((res) => {
        this.dataList.data = res.data.extlibrarys
      }).catch((res) => {
        this.datalist.data = [{'extlib_desc': 'sadfasdfasd', 'extlib_id': '07c19f1d-9c05-4a34-b331-7d9ad5f26719', 'extlib_name': '布控库3', 'extlib_status': 1, 'src_id': 20}, {'extlib_create_time': '2018-01-17 16:16:16', 'extlib_desc': '布控库-9', 'extlib_id': '3fda3ef7-66c2-48c9-80c0-50d3651c9500', 'extlib_last_modify': '2018-01-17 16:16:16', 'extlib_name': '新的布控库9', 'extlib_status': 0, 'src_id': 9}, {'extlib_create_time': '2018-01-17 16:00:53', 'extlib_desc': '布控库-6', 'extlib_id': '9d9c2e43-cb02-4e87-98dd-e2c338817497', 'extlib_last_modify': '2018-01-17 16:00:53', 'extlib_name': '新的布控库6', 'extlib_status': 0, 'src_id': 6}, {'extlib_create_time': '2018-01-17 15:23:35', 'extlib_desc': '布控库-5', 'extlib_id': 'f065b216-d82e-409c-98d3-8503bf4a157e', 'extlib_last_modify': '2018-01-17 15:23:35', 'extlib_name': '新的布控库5', 'extlib_status': 0, 'src_id': 5}, {'extlib_create_time': '2018-01-17 14:42:58', 'extlib_desc': '布控库-4', 'extlib_id': 'fc8b7f1d-dbaa-4464-9440-77b3008704ef', 'extlib_last_modify': '2018-01-17 14:42:58', 'extlib_name': '新的布控库4', 'extlib_status': 0, 'src_id': 4}]
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
      this.$promptBox('haha', {
        width: '10px',
        height: '20px'
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getData(1, 20)
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
</style>
