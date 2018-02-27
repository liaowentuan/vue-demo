<template>
  <div>
    <el-button type="text" @click="dialogVisible = true;getData(1, 20)">点击打开 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible"  width="30%" :before-close="handleClose">
      <span>确认删除:{{currentRow}}吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="活动名称">
        <el-input v-model="form.name" @keyup.enter.native="onSubmit"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="dataList.data" border max-height="500" style="width: 100%" highlight-current-row @current-change="handleCurrentRowsChange">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="extlib_desc" label="描述" width="180"></el-table-column>
      <el-table-column prop="extlib_id" label="id" width="300"></el-table-column>
      <el-table-column prop="extlib_name" label="名字"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
    <hr>
    <span>被选项：</span>{{currentRow}}
    <hr>
    <el-table @row-click="setCurrent" :data="dataList.data" border max-height="500" style="width: 100%" @selection-change="handleSelectionChange" stripe>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="extlib_desc" label="描述" width="180"></el-table-column>
      <el-table-column prop="extlib_id" label="id" width="300"></el-table-column>
      <el-table-column prop="extlib_name" label="名字"></el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
    <hr>
    <span>多选项：</span>{{currentRows}}
    <hr>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">默认为 Date 对象</span>
            <div class="demonstration">值：{{ value10 }}</div>
            <el-date-picker v-model="value10" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">时间戳</span>
            <div class="demonstration">值：{{ value12 }}</div>
            <el-date-picker v-model="value12" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp"></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">使用 value-format</span>
            <div class="demonstration">值：{{ value11 }}</div>
            <el-date-picker v-model="value11" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: 'login',
      data () {
        return {
          config: {
            color: true
          },
          msg: 'hello world',
          dialogVisible: false,
          dataList: {
            data: []
          },
          pageSize: 10,
          currentPage: 1,
          total: 0,
          value10: '',
          value11: '',
          value12: '',
          form: {
            name: ''
          },
          currentRow: '',
          currentRows: []
        }
      },
      methods: {
        getData (page, size) {
          this.$http({
            method: 'GET',
            url: '/controller/extlibs?extlib_name=&page=' + page + '&pagesize=' + size
          }).then((res) => {
            this.dataList.data = res.data.extlibrarys
            this.total = res.data.count
          }).catch((res) => {
            this.dataList.data = [{'extlib_desc': 'sadfasdfasd', 'extlib_id': '07c19f1d-9c05-4a34-b331-7d9ad5f26719', 'extlib_name': '布控库3', 'extlib_status': 1, 'src_id': 20}, {'extlib_create_time': '2018-01-17 16:16:16', 'extlib_desc': '布控库-9', 'extlib_id': '3fda3ef7-66c2-48c9-80c0-50d3651c9500', 'extlib_last_modify': '2018-01-17 16:16:16', 'extlib_name': '新的布控库9', 'extlib_status': 0, 'src_id': 9}, {'extlib_create_time': '2018-01-17 16:00:53', 'extlib_desc': '布控库-6', 'extlib_id': '9d9c2e43-cb02-4e87-98dd-e2c338817497', 'extlib_last_modify': '2018-01-17 16:00:53', 'extlib_name': '新的布控库6', 'extlib_status': 0, 'src_id': 6}, {'extlib_create_time': '2018-01-17 15:23:35', 'extlib_desc': '布控库-5', 'extlib_id': 'f065b216-d82e-409c-98d3-8503bf4a157e', 'extlib_last_modify': '2018-01-17 15:23:35', 'extlib_name': '新的布控库5', 'extlib_status': 0, 'src_id': 5}, {'extlib_create_time': '2018-01-17 14:42:58', 'extlib_desc': '布控库-4', 'extlib_id': 'fc8b7f1d-dbaa-4464-9440-77b3008704ef', 'extlib_last_modify': '2018-01-17 14:42:58', 'extlib_name': '新的布控库4', 'extlib_status': 0, 'src_id': 4}]
          })
        },
        handleClose (done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done()
            })
            .catch(_ => {})
        },
        handleSizeChange (val) {
          this.pageSize = val
          console.log(`当前页: ${this.currentPage}`, this.pageSize)
          this.getData(this.currentPage, this.pageSize)
        },
        handleCurrentChange (val) {
          this.currentPage = val
          console.log(`当前页: ` + this.currentPage, this.pageSize)
          this.getData(this.currentPage, this.pageSize)
        },
        onSubmit () {
          console.log('submit!')
        },
        handleCurrentRowsChange (val) {
          this.currentRow = val
        },
        handleSelectionChange (val) {
          this.currentRows = val
        },
        setCurrent (row, event, column) {
          console.log(row, event, column)
        },
        handleEdit (index, row) {
          console.log(index, row)
        },
        handleDelete (index, row) {
          this.dialogVisible = true
          console.log(index, row)
        }
      },
      mounted: function () {
        this.$nextTick(function () {
          this.getData(1, this.pageSize)
        })
      }
    }
</script>

<style scoped>

</style>
