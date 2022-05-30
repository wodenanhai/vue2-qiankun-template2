<template>
    <div id="app">
        <el-link type="primary" @click="handleClick('/')">demo</el-link>
        <el-link type="primary" @click="handleClick('/about')">views</el-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        methods: {
            handleClick(href) {
                this.$router.push(href)
            }
        }
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
