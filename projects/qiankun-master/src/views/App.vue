<template>
    <div id="main">
        <div class="header">
            <micro-header></micro-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <menu-tree v-for="(item,index) in menuList" :key="index" :menu="item"></menu-tree>
            </el-menu>
        </div>
        <div id="micro-view"></div>
    </div>
</template>

<script>
import MenuTree from "../components/MenuTree";
import MicroHeader from "../components/micro-header";

export default {
    name: 'App',
    components: {MicroHeader, MenuTree},
    data() {
        return {
            activeIndex: '1',
            menuList: [
                {
                    name: "橙子",
                    index: "1",
                    url: "/spa/firstApp",
                }, {
                    name: "月亮",
                    index: "2",
                    url: "/spa/secondApp",
                }
            ],
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped lang="scss">
#main {
    width: 100%;
    height: 100%;
}
</style>
