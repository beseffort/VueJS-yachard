import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import pageModule from './modules/page/index'
import menuModule from './modules/menu/index'

Vue.use(Vuex)

const state = {
  currentSite: 'Yachad',
  pageType: null
}

const actions = {
  setSite (store, site) {
    store.commit('CURRENT_SITE_SET', site)
  },
  setPageType (store, type) {
    store.commit('PAGE_TYPE_SET', type)
  }
}
const mutations = {
  CURRENT_SITE_SET (state, theme) {
    state.currentSite = theme
  },
  PAGE_TYPE_SET (state, type) {
    state.pageType = type
  }
}

export default new Vuex.Store({
  modules: {
    page: pageModule,
    menu: menuModule
  },
  state,
  getters,
  mutations,
  actions
})
