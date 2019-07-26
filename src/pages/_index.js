import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// 获取文件目录
// 参数1：其组件目录的相对路径
// 参数2：是否查询其子目录
// 参数3：匹配基础组件文件名的正则表达式
const requireComponent = require.context('.',true,/.vue$/)
// 定义pages对象
const pages = {};
// 遍历文件目录，获取文件名
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 获取组件名
  const componentName = componentConfig.default.name;
  // 将所有组件放入pages对象
  pages[componentName] = componentConfig.default;
})

// 将pages对象暴露出去
export default pages

