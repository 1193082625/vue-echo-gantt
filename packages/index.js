/*
 * @Descripttion: 组件全局注册
 * @Author: 王月
 * @Date: 2020-08-25 14:39:06
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-27 14:37:12
 */

 import Gantt from "./gantt/index";
 import Calendar from "./calendar/index";

// 以数组的结构保存组件，便于遍历
const components = [Gantt, Calendar];

// 定义Install方法
const install = function (Vue) {
   if(install.installed) return;
   install.installed = true;
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component);
        Vue.prototype.$initData = function(data) {
            for(let key in this.$refs) {
                for(let j in data) {
                    this.$refs[key][j] = data[j];
                }
            }
        }
    })
}
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    // 导出的对象必须具备一个install方法
    install,
    // 组件列表
    ... components
}