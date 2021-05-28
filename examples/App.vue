<!--
 * @Descripttion: 
 * @Author: 王月
 * @Date: 2020-08-25 14:29:44
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-27 14:39:12
-->
<template>
  <div id="app">
    <!-- 周历 -->
    <gantt ref="gantt" @handleClick="handleClick" />
    <!-- 日历 -->
    <!-- <calendar ref="calendar" @goDetail="goDetail" /> -->
  </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            progressDons: []
        }
    },
    mounted() {
        // 周历赋值
        setTimeout(() => {
            this.progressDons[0] = [];
            for(let i=1; i<7; i++){
                this.progressDons[i] = this.progressDons[i] ? this.progressDons[i] : [];
                let a = Math.floor(Math.random() * 24);
                this.progressDons[i].push({
                    start: a,
                    end: a + Math.ceil(Math.random() *10) > 24 ? 24 : a + Math.ceil(Math.random() *10)
                })
            }
            this.progressDons[0].push({
                start: 2,
                end: 12
            })
            this.progressDons[0].push({
                start: 15,
                end: 19
            })
            this.$initData({
                progressDons: this.progressDons
            });
        }, 200);
        // 日历赋值
        // setTimeout(() => {
        //     let imgs = [
        //         [
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //         ],
        //         [
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //         ],
        //         [
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //         ],
        //         [
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //         ],
        //         [
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //         ],
        //         [
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //             '',
        //             'http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg',
        //             '',
        //             '',
        //         ]
        //     ];
        //     this.$initData({
        //         imgs: imgs
        //     });
        // }, 200);
    },
    methods: {
        goDetail(id) {
            console.log('子组件触发父组件方法');
            console.log(id);
        },
        handleClick(id) {
            console.log('子组件触发父组件方法');
            console.log(id);
        }
    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
