<template>
    <div class="qiankun-home-layout">
        <div class="title">
            <micro-header></micro-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <menu-tree v-for="(item,index) in menuList" :key="index" :menu="item"></menu-tree>
            </el-menu>
        </div>
        <div class="container">
            <transition name="fade-transform" mode="out-in">
                <div id="container"></div>
            </transition>
        </div>
    </div>
</template>

<script>
import MenuTree from "../../components/MenuTree";
import MicroHeader from "../../components/micro-header";

export default {
    name: "qiankun-home-layout",
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
    }
}
</script>
<style scoped lang="scss">
.qiankun-home-layout {
    width: 100%;
    height: 100%;
    
    .title {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
    }
    
    .container {
        width: 100%;
        height: calc(100% - 60px);
    }
}
</style>