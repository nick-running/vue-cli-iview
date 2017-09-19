<template>
    <div>
      <h1>生成标准</h1>
      <el-form :inline="true" :model="form" ref="ruleForm" :rules="rules" class="demo-form-inline">
        <el-form-item label="开始id" prop="stdIdMin">
          <el-input type="number" v-model="form.stdIdMin" placeholder="开始id"></el-input>
        </el-form-item>
        <el-form-item label="结束id" prop="stdIdMax">
          <el-input type="number" v-model="form.stdIdMax" placeholder="开始id"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">生成</el-button>
      </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import axios from 'axios'
  import urls from '@/api/urls.js'
  const qs = require('qs');
    export default {
        name: 'generatingStandard',
        data() {
            return {
              form: {
                stdIdMin: '',
                stdIdMax: ''
              },
              rules: {
                stdIdMin: [
                  {required: true, message: '请输入开始id', trigger: 'blur'},
                  {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
                ],
                stdIdMax: [
                  {required: true, message: '请输入结束id', trigger: 'blur'},
                  {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
                ],
              }
            }
        },
        methods: {
          onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {

                let url = urls.GENERATING_ZS
                let data = qs.stringify(this.form)
                let _this = this
                axios({
                  method: 'post',
                  url: url,
                  data: data
                }).then(function (resp) {
                  if(resp.data.resultCode==='SUCCESS') {
                    let tips = _this.routeParams.mode==='create'?'创建':'更新'
                    _this.$notify({
                      title: '成功',
                      message: tips+'标准化知识成功',
                      type: 'success'
                    });
                    _this.$router.push('/sdKnowledge')
                  }
                }).catch(function (error) {
                  console.log(error)
                })

              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
        }
    }
</script>

<style>

</style>
