<template>
    <div class="digital-clock">
        <span class="header-time">{{time}}</span>
        <div class="header-date-week">
            <span class="header-date">{{date}}</span>
            <span class="header-week">{{week}}</span>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    import 'moment/locale/zh-cn'

    moment.locale('zh-cn');
    export default {
        name: "digital-clock",
        data() {
            return {
                timer: null,
                time: "",
                date: "",
                week: "",
            }
        },
        mounted() {
            this.initDateTime();
        },
        methods: {
            initDateTime() {
                let _this = this;
                this.timer = setInterval(() => {
                    _this.time = moment().format("HH:mm:ss");
                    _this.date = moment().format("YYYY/MM/DD");
                    _this.week = moment().format("dddd");
                })
            },
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
</script>

<style scoped lang="scss">
    .digital-clock {
        display: flex;
        align-items: center;
        color: white;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        .header-time {
            margin-right: 15px;
            letter-spacing: 2px;
            font-size: 20px;
        }
        .header-date-week {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            line-height: 20px;
            .header-date {
                height: 50%;
            }
            .header-week {
                height: 50%;
                font-weight: normal;
            }
        }
    }
</style>
