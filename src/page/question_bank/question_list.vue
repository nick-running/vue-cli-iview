<template>
    <div>
        <!--<Switch v-model="switch2" @on-change="change"></Switch>-->
      <h1>
        <div class="pull-right">
          <router-link to="/question_editor">
            <Button icon="plus-round" type="primary">新增</Button>
          </router-link>
        </div>
        题库列表
      </h1>
      <Table stripe :columns="tableHeader" :data="tableData"></Table>
    </div>
</template>
<script>
    import urls from '@/api/urls.js'
    import app from '@/api/app.js'
    export default {
        name: 'question_list',
        data() {
            return {
              switch2: false,
              tableHeader: [
                {
                  title: '问题',
                  key: '_content'
                },
                {
                  title: '创建日期',
                  key: '_create_at'
                },
                {
                  title: '状态',
                  key: '_status',
                  render: (h, params) => {
                    let _this = this
                    return h('div', [
                      h('i-switch', {
                        props: {
                          disabled: 'disabled',
                          value: params.row._status?true:false
                        },
                        on: {
                          'on-change': (status) => {
                            setTimeout(function () {
                              this.$Message.info('设置成功');
                              _this.tableData[params.index]._status = status
                            },500)
                          }
                        }
                      })
                    ]);
                  }
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 150,
                  align: 'center',
                  render: (h, params) => {
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            this.show(params.index)
                          }
                        }
                      }, '查看'),
                      h('Button', {
                        props: {
                          type: 'error',
                          size: 'small'
                        },
                        on: {
                          click: () => {
                            this.delete(params.index)
                          }
                        }
                      }, '删除')
                    ]);
                  }
                }
              ],
              tableData: []
            }
        },
        methods: {
          show (index) {
            this.$Modal.info({
              title: '题目',
              content: `问题：${this.tableData[index]._content}<br>创建日期：${this.tableData[index]._create_at}<br>状态：${this.tableData[index]._status?'已启用':'未启用'}`
            })
          },
          delete (index) {
            this.$Modal.confirm({
              title: '是否删除此题目？',
              content: '<p>“'+this.tableData[index]._content+'”将会被删除！</p>',
              onOk: () => {
                let _this = this
                _this.$axios({
                  method: 'post',
                  url: urls.QUESTION_DELETE,
                  data: {id: _this.tableData[index]._id},
                }).then(function (resp) {
                  app.isRespOk(resp, function () {
                    _this.getList()
                    _this.$Message.success('删除成功')
                  })
                })
              }
            });
          },
          getList() {
            let _this = this
            _this.$axios({
                method: 'post',
                url: urls.QUESTION_LIST,
//                    data: {status: this.orderStatus},
            }).then(function (resp) {
                app.isRespOk(resp, function () {
                    _this.tableData = resp.data.data
                })
            })
          }
        },
        created() {
            this.getList()
        }
    }
</script>
<style scoped>
  h1{
    margin: 20px 0;
  }
</style>
