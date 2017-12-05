<template>
    <div>

      <el-row>
        <el-col :span="12" :offset="5">


          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="菜谱名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="region">
              <el-select v-model="ruleForm.classifyId" placeholder="请选择分类">
                <el-option
                  v-for="item in ruleForm.classifyList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                  </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="拼音简码" prop="pinyin_code">
              <el-input type="textarea" v-model="ruleForm.pinyin_code"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
              <el-input v-model="ruleForm.price" type="number"></el-input>
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
        name: 'product_edit',
        data () {
            return {
              ruleForm: {
                name: '',
                classifyId: 19,
                classifyList: [
//                  {
//                    id: '选项1',
//                    name: '黄金糕'
//                  }
                ],
                type: [],
                desc: '',
                price: 0
              },
              rules: {
                name: [
                  { required: true, message: '请输入菜品名称', trigger: 'blur' },
                  { min: 3, max: 24, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                ],
                pinyin_code: [
                  { required: true, message: '请输入拼音简码', trigger: 'blur' },
                  { min: 3, max: 24, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                ],
                classifyId: [
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                desc: [
                  { message: '请填写描述', trigger: 'blur' }
                ],
                price: [
                  { required: true, message: '请填写价格', trigger: 'blur' }
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
                  url: urls.PRODUCT_ADD,
                  data: _this.ruleForm
                }).then(function (resp) {
                  if(resp.data.errno===0) {
                    _this.$message.success('新增成功');
                    _this.$router.push('product_list')
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
          },
          getClassify () {
            let _this = this
            axios({
              method: 'get',
              url: urls.CLASSIFY_LIST,
              headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
            }).then(function (resp) {
              _this.ruleForm.classifyList = resp.data.data
//              console.log(resp.data.classifyList)
            }).catch(function (error) {
              _this.$notify.warning('数据未能正常访问')
            })
          }
        },
      created () {
        this.getClassify()
      }
    }
</script>
<style>

</style>
