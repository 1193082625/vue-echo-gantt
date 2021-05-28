/*
 * @Descripttion: 导出当前组件
 * @Author: 王月
 * @Date: 2020-08-25 14:35:15
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-25 14:38:48
 */
import Gantt from './src/main.vue';
Gantt.install = function (Vue) {
    Vue.component(Gantt.name, Gantt);
}
export default Gantt;