<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">

        <h2>
          桌号列表
          <div class="pull-right">
            <router-link to="/table_editor">
              <el-button type="primary" icon="plus" size="small"></el-button>
            </router-link>
          </div>
        </h2>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="table_name"
            label="桌号"
            width="200">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="create_at"
            label="创建日期"
            width="200">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template scope="scope">
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-col>
    </el-row>
  </div>
</template>
<script>
  import axios from 'axios'
  import urls from '@/api/urls.js'
  export default{
    name: 'table_list',
    data () {
      return {
        tableData: [
          {
            table_name: '1号桌',
            desc: '普通桌子',
            createAt: '2017-9-25 18:23'
          }
        ]
      }
    },
    methods: {
      handleDelete(id) {
        this.$confirm('是否删除此桌号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let _this = this
          axios({
            method: 'delete',
            url: urls.TABLE_DELETE,
          data: {id: id}
      }).then(function (resp) {
          if(resp.data.errno===0) {
            _this.$message.success('删除成功');
            _this.reload()
          }else{
            _this.$notify.warning(resp.data.errmsg.id)
          }
        }).catch(function (error) {
          console.log(error)
          _this.$notify.warning('数据未能正常访问')
        })
      })
      },
      reload () {
        let _this = this
        axios({
          method: 'get',
          url: urls.TABLE_LIST
          //        data: {id: 2001}
        }).then(function (resp) {
          _this.tableData = resp.data.data
        }).catch(function (error) {
          console.log(error);
          _this.$notify.warning('数据未能正常访问')
        })
      }
    },
    created () {

      this.reload()
    }
  }
</script>
<style>

</style>
