<template>
    <transition name="fade" mode="out-in">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
</template>

<script>

    export default {
        data() {
            return {}
        },
        methods: {

        },
        name: 'AppMain',
        computed: {

        }
    }
</script>

<style>

</style>
