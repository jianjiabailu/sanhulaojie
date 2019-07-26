import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// 获取文件目录
// 参数1：其组件目录的相对路径
// 参数2：是否查询其子目录
// 参数3：匹配基础组件文件名的正则表达式
const requireComponent = require.context('.',false,/.vue$/)

// 遍历文件目录，获取文件名
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件名
  const componentName = componentConfig.default.name;
  // 全局注册组件
	// 如果这个组件选项是通过 `export default` 导出的，
	// 那么就会优先使用 `.default`，
	// 否则回退到使用模块的根。
  Vue.component(
    componentName, componentConfig.default || componentConfig
  )
})