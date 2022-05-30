<template>
    <div class="micro-header">
        <div class="micro-title"><i>Mr ORANGE1</i></div>
        <digital-clock></digital-clock>
    </div>
</template>

<script>
    import DigitalClock from "./digital-clock";

    export default {
        name: "micro-header",
        components: {DigitalClock},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .micro-header {
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        .micro-title {
            color: orange;
            font-size: 40px;
            font-weight: bold;
        }
    }
</style>