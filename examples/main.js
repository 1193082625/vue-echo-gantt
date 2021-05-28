/*
 * @Descripttion: 
 * @Author: 王月
 * @Date: 2020-08-25 14:29:44
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-26 17:42:12
 */
import Vue from 'vue'
import App from './App.vue'
import JKComponent from '../packages/index';

Vue.config.productionTip = false

Vue.use(JKComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
