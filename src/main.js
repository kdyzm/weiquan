import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ZuHuAdd from './components/ZuHuAdd';
import ZuHuList from './components/ZuHuList';
import FangDongAdd from './components/FangDongAdd';
import FangDongList from './components/FangDongList';
import Home from './components/Home';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import Template from './components/template/Template';
import ZuKeAuthTemplate from './components/template/ZuKeAuthTemplate';
import FangDongTemplate from './components/template/FangDongTemplate';
import ZuKeContact from './components/contact/ZuKeContact';
import FangDongContact from './components/contact/FangDongContact';
import About from './components/About';
import VueScroller from 'vue-scroller';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueScroller);
Vue.use(Mint);

//2.定义路由
const routes = [
  { path: '/fang-dong-add', component: FangDongAdd },
  { path: '/fang-dong-list', component: FangDongList },
  { path: '/zu-ke-add', component: ZuHuAdd },
  { path: '/zu-ke-list', component: ZuHuList },
  { path: '/home', component: Home },
  { path: '/template', component: Template },
  { path: '/template-fangdong', component: FangDongTemplate },
  { path: '/template-zuke', component: ZuKeAuthTemplate },
  { path: '/contact-zuke', component: ZuKeContact },
  { path: '/contact-fangdong', component: FangDongContact },
  { path: '/about', component: About },
  { path: '*', redirect: '/home' }
]

//3.创建router实例，传routes配置
const router=new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
