<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">

          <h2>
            菜谱列表
            <div class="pull-right">
              <router-link to="/product_editor">
                <el-button type="primary" icon="plus" size="small"></el-button>
              </router-link>
            </div>
          </h2>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="菜名"
              width="200">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述">
            </el-table-column>
            <el-table-column
              prop="createAt"
              label="创建日期"
              width="200">
            </el-table-column>
            <el-table-column
            prop="classify.name"
            label="分类"
            width="120">
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格"
              width="100">
              <template scope="scope">
                {{scope.row.price}}元
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template scope="scope">
                <el-button @click="handleClick(scope.row.id)" type="text" size="small">删除</el-button>
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
        name: 'product_list',
        data () {
            return {
              tableData: [
//                {name: '青椒肉丝',desc: '青椒肉丝非常好吃',createAt: '2017-9-25 18:23',price: '18'}
              ]
            }
        },
      methods: {
        handleClick(id) {
          this.$confirm('是否删除此菜谱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let _this = this
            axios({
              method: 'delete',
              url: urls.PRODUCT_DELETE,
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
            url: urls.PRODUCT_LIST
    //        data: {id: 2001}
          }).then(function (resp) {
            _this.tableData = resp.data.data.productList
            console.log(_this.menus)
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
