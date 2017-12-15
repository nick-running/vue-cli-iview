<template>
  <div>
    <h1>新增知识</h1>
    <Form ref="formItem" :model="formItem" :rules="ruleItem" :label-width="80">
      <FormItem label="问题" prop="question">
        <Input v-model="formItem.question" placeholder="请输入问题"/>
      </FormItem>
      <FormItem
        v-for="(item, index) in formItem.answerList"
        :label="index===0?'答案':''"
        :prop="'answerList.' + index + '.content'"
        :class="index===0?'success':'danger'"
        :rules="[
          {required: true, message: '请输入'+(item.isRight?'正确':'错误')+'答案', trigger: 'blur'},
            { type: 'string', min: 1, message: '输入答案最少1个字符', trigger: 'blur' }
          ]">
        <Input v-model="item.content" :placeholder="'请输入'+(item.isRight?'正确':'错误')+'答案'"/>
      </FormItem>
      <FormItem label="是否启用">
        <i-switch v-model="formItem.status"></i-switch>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formItem')">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import urls from '@/api/urls.js'
  import app from '@/api/app.js'
  export default {
    name: 'question_editor',
    data() {
      return {
        formItem: {
          question: '',
          status: true,
          answerList: [
            {content: '', isRight: true},
            {content: '', isRight: false},
            {content: '', isRight: false},
            {content: '', isRight: false}
          ]
        },
        ruleItem: {
          question: [
            { required: true, message: '请输入问题', trigger: 'blur' },
            { type: 'string', min: 3, message: '问题最少3个字符', trigger: 'blur' }
          ]
        }

      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if(valid) {
            let _this = this
            _this.$axios({
              method: 'post',
              data: {
                question: _this.formItem.question,
                status: _this.formItem.status,
                answers: _this.formItem.answerList
              },
              url: urls.QUESTION_ADD
            }).then(function (resp) {
              app.isRespOk(resp, function () {
                _this.$Message.success('新增成功')
                _this.$router.push('/question_list')
              })
            })

          }
        })
      }

    },
    created() {

    }
  }
</script>
<style>
  h1{
    margin: 20px 0;
  }
  .ivu-form-item.success .ivu-input{
    border: 1px solid #19be6b;
  }
  .ivu-form-item.danger .ivu-input{
    border: 1px solid #ff9900;
  }
</style>
