import Vue from 'vue'
import App from './App.vue'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
<<<<<<< HEAD
=======

>>>>>>> master
// 使用elementUI
Vue.use(ElementUI)

import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
