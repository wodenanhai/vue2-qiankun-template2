<template>
    <div>
        <el-link type="primary" @click="handleClick('/')">demo</el-link>
        <el-link type="primary" @click="handleClick('/about')">views</el-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {}
    },
    methods: {
        handleClick(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped lang="scss">

</style>