<template>
    <div id="app">
        <router-link to="/">首页2</router-link>
        <router-link to="/about">about2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
