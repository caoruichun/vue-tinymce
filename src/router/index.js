import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hell from '@/components/hell'
import wangzhan from '@/components/wangzhan'
import zhaizhangxin from '@/components/zhaizhangxin/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hell',
      name: 'hell',
      component: hell
    },
    {
      path: '/wangzhan',
      name: 'wangzhan',
      component: wangzhan
    },
    {
      path: '/zhaizhangxin',
      name: 'zhaizhangxin',
      component: zhaizhangxin
    }
    
  ]
})
