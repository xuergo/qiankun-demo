import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//乾坤----
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'order-center', // app name registered
    // entry: '//localhost:8081',//本地
    entry: '/orderCenter/',//线上
    container: '#micro-app',
    activeRule: '/order-center',
  },
]);
start();