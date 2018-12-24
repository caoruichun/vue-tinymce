// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.use(VueResource)
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.GLobal={
  "username":'王麻子',
  "age":24
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
