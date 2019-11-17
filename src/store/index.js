import Vuex from 'vuex'
import Vue from 'vue'
import home from './home'
import menu from './menu'
import order from './order'
import user from './user'
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state:{
        tabSelected:'0'
    },
    getters:{},
    mutations:{
        // 设置选中的TAB_INDEX
        SET_TAB_INDEX(state,selectedTab) {
            state.tabSelected = selectedTab
        }
    },
    actions:{},
    modules: {
        home,
        menu,
        order,
        user
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})