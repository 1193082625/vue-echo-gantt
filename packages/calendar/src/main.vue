<!--
 * @Descripttion: 日历
 * @Author: 王月
 * @Date: 2020-08-26 17:31:28
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-27 14:36:57
-->
<template>
     <div class="calendar">
        <div class="left">
            <div class="date">
                <span class="cont">
                    <span class="month">8月</span>
                    <span class="days">1日</span>
                </span>
            </div>
            <div class="date-title">
                <div class="item">第一张</div>
                <div class="item">第二张</div>
                <div class="item">第三张</div>
                <div class="item">第四张</div>
                <div class="item">第五张</div>
                <div class="item">第六张</div>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div>00:00</div>
                <div>01:00</div>
                <div>02:00</div>
                <div>03:00</div>
                <div>04:00</div>
                <div>05:00</div>
                <div>06:00</div>
                <div>07:00</div>
                <div>08:00</div>
                <div>09:00</div>
                <div>10:00</div>
                <div>11:00</div>
                <div>12:00</div>
                <div>13:00</div>
                <div>14:00</div>
                <div>15:00</div>
                <div>16:00</div>
                <div>17:00</div>
                <div>18:00</div>
                <div>19:00</div>
                <div>20:00</div>
                <div>21:00</div>
                <div>22:00</div>
                <div>23:00</div>
            </div>
            <div class="date-cont">
                <div class="item" v-for="(item, idx) in imgs" :key="idx">
                    <div class="hour" v-for="(img, i) in item" :key="i">
                        <img :src="img" alt="" @click="handleClick()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'calendar',
    data() {
        return {
            imgs: []
        }
    },
    methods: {
        handleClick() {
            this.$emit('goDetail', 1);
        }
    }
}
</script>
<style lang="less" scoped>
.calendar{
    border: 1px solid #D8D8D8;
    display: flex;
    .left{
        border-right: 1px solid #D8D8D8;
        width: 151px;
        .date{
            box-sizing: border-box;
            display: flex;
            padding-left: 10px;
            padding-right: 10px;
            color: #EA544A;
            height: 74px;
            justify-content: center;
            align-items: center;
            .cont{
                display: flex;
                flex: 1;
                text-align: center;
                line-height: 33px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .month{
                    font-size: 24px;
                    display: block;
                }
                .days{
                    font-size: 14px;
                    display: block;
                }
            }
        }
        .date-title{
            .item{
                height: 117px;
                background: #F8F8F8;
                color: #222222;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-top: 1px solid #D8D8D8;
                font-size:20px;
            }
        }
    }
    .right{
        flex: 1;
        width: calc(100% - 150px);
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        .top{
            width: calc(170px * 24);
            display: flex;
            border-bottom: 1px solid #D8D8D8;
            line-height: 74px;
            div{
                flex: 1;
                text-align: left;
                font-size:18px;
                font-weight:500;
                color:#222222;
                padding-left: 11px;
                background: #F8F8F8;
                &:not(:last-child) {
                    border-right: 1px solid #D8D8D8;
                }
            }
        }
        .date-cont{
            flex: 1;
            width: calc(170px * 24);
            display: flex;
            flex-direction: column;
            position: relative;
            .item{
                height: 117px;
                display: flex;
                &:not(:last-child){
                    border-bottom: 1px solid #D8D8D8;
                }
                .hour{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:not(:last-child){
                        border-right: 1px solid #D8D8D8;
                    }
                    img{
                        width: 152px;
                        height: 56px;
                        display: block;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
// div::-webkit-scrollbar {
//     // width: 0;
//     // height: 0;
//     height: 10px;
//     margin-bottom: -10px;
// }
</style>