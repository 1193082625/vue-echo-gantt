<!--
 * @Descripttion: 甘特图组件
 * @Author: 王月
 * @Date: 2020-08-25 14:35:07
 * @LastEditors: 王月
 * @LastEditTime: 2020-08-27 14:55:11
-->
<template>
    <div class="calendar">
        <div class="title">
            <div class="date">
                <span class="prev" @click="changeWeek(-1)"><</span>
                <span class="cont">
                    <span class="month">{{month}}月</span>
                    <span class="days">{{dates.beginDate}}-{{dates.endDate}}日</span>
                </span>
                <span class="next" @click="changeWeek(1)">></span>
            </div>
            <div>00:00</div>
            <div>04:00</div>
            <div>08:00</div>
            <div>12:00</div>
            <div>16:00</div>
            <div>20:00</div>
        </div>
        <div class="lastTime">24:00</div>
        <div class="cont">
            <div class="date-title">
                <div v-for="day in dates.days" class="item">
                    <strong>周{{day.week}}</strong>
                    <span>{{day.day}}日</span>
                </div>
            </div>
            <div class="date-cont">
                <div class="bg">
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                    <div class="hour"></div>
                </div>
                <div class="item">
                    <div class="progress">
                        <div class="line" v-for="(line, index) in progressDons" :key="index">
                            <div class="progress-done" v-for="(item, idx) in line" :key="idx" :style="{ width: (item.end - item.start) / 24 * 100 + '%', left: item.start / 24 * 100+'%'}" @mousemove="move()" @mouseleave="leave()"></div>
                        </div>
                    </div>
                </div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="popup" v-if="showDetail" :style="{left: popup.left + 'px', top: popup.top + 'px'}">
                    <div class="title">十一活动的图片嗯啊呢</div>
                    <div class="time">00:00-24:00</div>
                    <img src="http://beta-core.51yunxi.cn/Image/ShopPic/13/637247944652602538.jpg" />
                    <div class="btn" @click="goCalendar()">详情</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gantt',
    data() {
        return {
            showDetail: false,
            ndate: null, // 当天日期
            month: null, // 当月
            popup: {
                left: '',
                top: ''
            },
            dates: { // 日期时间
                beginDate: '',
                endDate: '',
                days: [
                    {
                        week: '一',
                        day: ''
                    },{
                        week: '二',
                        day: ''
                    },{
                        week: '三',
                        day: ''
                    },{
                        week: '四',
                        day: ''
                    },{
                        week: '五',
                        day: ''
                    },{
                        week: '六',
                        day: ''
                    },{
                        week: '日',
                        day: ''
                    },
                ]
            },
            progressDons: []
        }
    },
    mounted() {
        // 获取当前日期
        this.ndate = new Date();
        this.computeWeek(this.ndate);
    },
    methods: {
        goCalendar() {
            this.$emit('handleClick', 66);
        },
        changeDate(idx) {
            console.log(idx);
        },
        move(e) {
            e = e || window.event;
            this.popup.left = e.clientX - 200;
            this.popup.top = e.clientY - 335;
            this.showDetail = true;
        },
        leave() {
            // this.showDetail = false;
        },
        computeWeek(now) {
            let totalDays = 0;    
            let years = now.getYear();
            if (years < 1000)  
            years += 1900;   
            let days = new Array(12);   
            days[0] = 31;
            days[1] = Math.round(now.getYear() / 4) == now.getYear() / 4 ? 29 : 28; 
            days[2] = 31;
            days[3] = 30;
            days[4] = 31;
            days[5] = 30;
            days[6] = 31;
            days[7] = 31;
            days[8] = 30;
            days[9] = 31;
            days[10] = 30;
            days[11] = 31;
            let nDate = now.getDate();
            let weekIdx = now.getDay() === 0 ? 7 : now.getDay();
            let beginDate = weekIdx === 1 ? nDate : nDate - weekIdx + 1;
            let curMonth = new Date(now.setDate(now.getDate() - weekIdx + 1)).getMonth();
            this.month = curMonth + 1;
            let endDate = beginDate + 6 > days[curMonth] ? Math.abs(beginDate + 6 - days[curMonth]) : beginDate + 6;
            this.dates.beginDate = beginDate;
            this.dates.endDate = endDate;
            this.dates.days[0]['day'] = beginDate;
            this.dates.days[6]['day'] = endDate;
            let nday = beginDate;
            for(let i=1; i< 6; i++) {
                nday = nday + 1 > days[curMonth] ? Math.abs(nday + 1 - days[curMonth]) : nday + 1;
                this.dates.days[i]['day'] = nday;
            }
        },
        // 切换上一周、下一周
        changeWeek(sign) {
            let targetDate = this.ndate.setDate(this.ndate.getDate() + sign * 7);
            this.computeWeek(new Date(targetDate));
        },
    }
}
</script>
<style lang="less" scoped>
.calendar{
    border: 1px solid #D8D8D8;
    margin-right: 70px;
    position: relative;
    .lastTime{
        position: absolute;
        right: -51px;
        top: 0;
        line-height: 74px;
        font-size:18px;
        font-weight:500;
        color:#222222;
    }
    .title{
        display: flex;
        border-bottom: 1px solid #D8D8D8;
        line-height: 74px;
        div{
            &:first-child{
                width: 151px;
            }
            &:not(:first-child){
                flex: 1;
                text-align: left;
                font-size:18px;
                font-weight:500;
                color:#222222;
                padding-left: 11px;
                background: #F8F8F8;
            }
            &:not(:last-child) {
                border-right: 1px solid #D8D8D8;
            }
            &.date{
                box-sizing: border-box;
                display: flex;
                padding-left: 10px;
                padding-right: 10px;
                color: #EA544A;
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
                span:not(.cont){
                    cursor: pointer;
                }
            }
        }
    }
    .cont{
        display: flex;
        .date-title{
            width: 150px;
            border-right: 1px solid #D8D8D8;
            .item{
                height: 148px;
                background: #F8F8F8;
                color: #222222;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:not(:last-child){
                    border-bottom: 1px solid #D8D8D8;
                }
                strong{
                    font-size: 24px;
                    display: block;
                    margin-bottom: 5px;
                    font-weight: normal;
                }
                span{
                    display: block;
                    font-size: 14px;
                }
            }
        }
        .date-cont{
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            .bg{
                width: 100%;
                height: 100%;
                display: flex;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
                .hour{
                    flex: 1;
                    &:not(:last-child){
                        border-right: 1px solid #D8D8D8;
                    }
                    &:not(:nth-child(4n)){
                        border-color: #EAEAEA;
                    }
                }
            }
            .popup{
                position: absolute;
                left: 0;
                top: 0;
                z-index: 100;
                width: 200px;
                padding: 15px;
                background: #fff;
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.3);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 13px;
                &::after{
                    position: absolute;
                    display: inline-block;
                    bottom: -6px;
                    left: 40px;
                    width: 0;
                    height: 0px;
                    content: '';
                    border-style: solid;
                    border-width: 6px;
                    border-color: #fff #fff transparent transparent;
                    transform: rotate(135deg);
                    box-shadow: 2px -2px 2px #ccc;
                }
                div {
                    border-bottom: none;
                }
                .title{
                    font-size:14px;
                    font-weight:bold;
                    color:#222222;
                    line-height:19px;
                }
                .time{
                    font-size:14px;
                    color:#888888;
                    line-height:19px;
                    margin-top: 2px;
                }
                img{
                    width: 174px;
                    height: 66px;
                    display: block;
                    margin-top: 11px;
                }
                .btn{
                    width:72px;
                    height:28px;
                    background:rgba(234,84,74,1);
                    border-radius:4px;
                    font-size:14px;
                    color:#fff;
                    line-height:28px;
                    margin-top: 16px;
                    cursor: pointer;
                }
            }
            .item{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                &:not(:last-child){
                    border-bottom: 1px solid #D8D8D8;
                }
                .progress{
                    width: 100%;
                    .line{
                        display: flex;
                        position: relative;
                        height: 16px;
                        &:not(:last-child){
                            margin-bottom: 4px;
                        }
                        &:nth-child(n) .progress-done{
                            background: #E8748C;
                        }
                        &:nth-child(2n) .progress-done{
                            background: #F1B076;
                        }
                        &:nth-child(3n) .progress-done{
                            background: #FADF7F;
                        }
                        &:nth-child(4n) .progress-done{
                            background: #AAD26C;
                        }
                        &:nth-child(5n) .progress-done{
                            background: #70C7E0;
                        }
                        &:nth-child(6n) .progress-done{
                            background: #A285BC;
                        }
                    }
                    .progress-done {
                        border-radius: 0 8px 8px 0;
                        height: 16px;
                        width: 0;
                        transition: width 5s ease 0.3s;
                        position: absolute;
                        top: 0;
                    }
                }
            }
        }
    }
}
</style>