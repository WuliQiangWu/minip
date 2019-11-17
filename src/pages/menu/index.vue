<template>
    <div>
        <div>点餐页</div>
        <tab-bar></tab-bar>
    </div>


</template>

<script>
    import tabBar from "@/components/tabbar";
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "index",
        computed: {
            ...mapState({
                tabSelected: state => state.tabSelected
            })
        },
        onLoad() {

        },
        onShow() {
        },
        methods: {
            ...mapMutations({
                set_tab_index: 'SET_TAB_INDEX'
            })
        },
        components: {
            tabBar
        }
    }
</script>

<style scoped>

</style>