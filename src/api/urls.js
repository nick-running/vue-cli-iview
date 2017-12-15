// const prefix = ''
// const PREFIX_QO = '/api'
// const PREFIX_MOCK = '/api_mock'
const PREFIX = '/api/'
export default {
  SOCKET_URL: PREFIX + '',
  // 商家登录
  USER_LOGIN: PREFIX + 'merchant_user/login',

  // 知识库管理
  QUESTION_LIST: PREFIX + 'question/list',
  QUESTION_ADD: PREFIX + 'question/add',
  QUESTION_DELETE: PREFIX + 'question/delete',
  PRODUCT_DELETE: PREFIX + 'product/delete'
}
