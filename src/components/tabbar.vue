<template>
    <div class="tab-bar">
        <div class="tab-bar-border"></div>
        <template v-for="tab in tabBar.list">
            <div :key="tab.index" :data-path="tab.pagePath" :data-index="tab.index" class="tab-bar-item"
                 @click="switchTab">
                <image :src="selected === tab.index ? tab.selectedIconPath : tab.iconPath"></image>
                <div :class="{'active':selected === tab.index}">{{tab.text}}</div>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import {setStorage,getStorage} from '@/utils/storage'

    export default {
        name: "tabBar",
        data() {
            return {
                tabBar: {
                    list: [
                        {
                            "index": "0",
                            "pagePath": "/pages/index/index",
                            "text": "首页",
                            "iconPath": "http://res.hualala.com/basicdoc/b343e11b-ca1b-4b74-8e6e-597e0e88a863.png",
                            "selectedIconPath": "http://res.hualala.com/basicdoc/95d7418d-3a73-4cdf-ae22-b8403dcbf28d.png"
                        },
                        {
                            "index": "1",
                            "pagePath": "/pages/menu/index",
                            "text": "点餐",
                            "iconPath": "http://res.hualala.com/basicdoc/d8f67819-947c-4990-bf0e-a59d0bc7e6bd.png",
                            "selectedIconPath": "http://res.hualala.com/basicdoc/4fa15195-01ec-4729-85fa-5362b2b17ee9.png"
                        },
                        {
                            "index": "2",
                            "pagePath": "/pages/order/index",
                            "text": "订单",
                            "iconPath": "http://res.hualala.com/basicdoc/ecd81dad-286e-4e91-9aba-99fc8760f9aa.png",
                            "selectedIconPath": "http://res.hualala.com/basicdoc/8df60018-5b21-44db-ac70-8fd61561499a.png"
                        },
                        {
                            "index": "3",
                            "pagePath": "/pages/user/index",
                            "text": "我的",
                            "iconPath": "http://res.hualala.com/basicdoc/aaa05b90-3da6-41f5-a7dc-29bf05913913.png",
                            "selectedIconPath": "http://res.hualala.com/basicdoc/47cc2b7b-9d42-4f18-b22c-df15e6d2f78b.png"
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapState({
                tabSelected: state => state.tabSelected
            }),
            selected() {
                return this.tabSelected
            }
        },
        async onReady(){
            let tabIndex = '0';
            try {
               tabIndex = this.tabSelected  ||  await getStorage('selectedTab');
            } catch (e) {
                tabIndex = '0'
            }
            this.set_tab_index(tabIndex);
            await setStorage('selectedTab',tabIndex);
        },
        methods: {
            ...mapMutations({
                set_tab_index: 'SET_TAB_INDEX'
            }),
            async switchTab(e) {
                const data = e.currentTarget.dataset;
                const url = data.path;
                uni.switchTab({
                    url: url,
                    success: (data) => {
                        console.log(data)
                    }, fail: (err) => {
                        console.log(err)
                    }
                });
                this.set_tab_index(data.index);
                await setStorage('selectedTab',data.index)
            }
        }
    }
</script>

<style scoped lang="less">
    .tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        background: white;
        display: flex;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .tab-bar-border {
        background-color: rgba(0, 0, 0, 0.33);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1rpx;
        transform: scaleY(0.5);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .tab-bar-item image {
        width: 40rpx;
        height: 40rpx;
    }

    .tab-bar-item div {
        font-size: 20rpx;
        color: #7A7E83;

        &.active {
            color: red;
        }
    }

</style>