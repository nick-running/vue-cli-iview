<template>
  <div>

    <el-row>
      <el-col :span="12" :offset="5">


        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="桌号名称" prop="table_name">
            <el-input v-model="ruleForm.table_name"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>
<script>
  import axios from 'axios'
  import urls from '@/api/urls.js'
  export default{
    name: 'table_editor',
    data () {
      return {
        ruleForm: {
          table_name: '',
          type: [],
          desc: ''
        },
        rules: {
          table_name: [
            { required: true, message: '请输入桌号名称', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          desc: [
            { message: '请填写描述', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
//                alert('submit!');
            let _this = this
            axios({
              method: 'post',
              url: urls.TABLE_ADD,
              data: _this.ruleForm
            }).then(function (resp) {
              if(resp.data.errno===0) {
                _this.$message.success('新增成功');
                _this.$router.push('table_list')
              }else{
                _this.$message.error(resp.errmsg);
              }
            }).catch(function (error) {
              console.log(error)
              _this.$notify.warning('数据未能正常访问')
            })
          } else {
            console.log('error submit!!');
        return false;
      }
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created () {

    }
  }
</script>
<style>

</style>
