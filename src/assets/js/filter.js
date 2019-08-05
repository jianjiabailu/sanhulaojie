import Vue from 'vue'

Vue.filter('imgName', function (value) {
  // 返回处理后的值
  let asd = value.split('/')
  return asd[asd.length-1]
})