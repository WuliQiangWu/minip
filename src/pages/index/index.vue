<template>
    <view class="content">
        <view>
            <text class="title">{{title}}</text>
            <tab-bar></tab-bar>
        </view>
    </view>
</template>

<script>
    import tabBar from "@/components/tabbar";
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                title: '我是首页'
            }
        },
        computed: {
            ...mapState({
                tabSelected: state => state.tabSelected
            })
        },
        onLoad() {

        },
        onShow() {
            console.log(this.tabSelected)
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

<style>
    .content {
        text-align: center;
        height: 400upx;
    }

    .title {
        font-size: 36upx;
        color: #8f8f94;
    }
</style>
