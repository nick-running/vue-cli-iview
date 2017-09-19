// const prefix = ''
// const PREFIX_QO = '/api'
// const PREFIX_MOCK = '/api_mock'
const PREFIX = '/api'
export default {
  // MENUS: PREFIX + 'http://localhost:3030/script/cu/availableMenus', // 菜单数据
  DICT: PREFIX + '/qd/qdcotb/Dictionaries/', // 字典数据
  // 知识管理
  KNOWLEDGE_LIST: PREFIX + '/qd/qdcont/page/', // 知识列表
  KNOWLEDGE_CLOSE: PREFIX + '/qd/qdcotb/remove/', // 关闭知识
  KNOWLEDGE_VIEW: PREFIX + '/qd/qdcont/view/', // 查看知识
  KNOWLEDGE_CREATE: PREFIX + '/qd/qdcont/create', // 创建知识
  KNOWLEDGE_UPDATE: PREFIX + '/qd/qdcont/update', // 更新知识
  KNOWLEDGE_RELEASE: PREFIX + '/qd/qdcotb/release/', // 发布知识
  // 标准管理
  // STANDARD_LIST: PREFIX + '/qm/qmstdq/search', // 知识列表
  // STANDARD_VIEW: PREFIX_MOCK + '/62f7d0f3e59c92f87fed/standard_detail' // 知识查看
  STANDARD_LIST: PREFIX + '/qd/qdcont/backGroundQuery', // 标准列表
  STANDARD_VIEW: PREFIX + '/qd/qdcont/backstadatil/' // 知识查看
}
