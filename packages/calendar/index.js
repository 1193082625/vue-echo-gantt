/*
 * @Descripttion: 
 * @Author: 王月
 * @Date: 2020-08-26 17:31:49
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-26 17:32:10
 */
import Calendar from './src/main.vue';
Calendar.install = function (Vue) {
    Vue.component(Calendar.name, Calendar);
}
export default Calendar;