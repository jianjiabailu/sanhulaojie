import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
	isCollapse: true,
	userid: localStorage.getItem('userid'),
	request_url: 'http://api.sanhulaojie.cn:8080' //'http://localhost:8888',
}
const actions = {
    actionsAddCount(context, n = 0) {
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}
const getters = { 
    getterCount(state, n = 0) {
        return (state.count += n)
    }
}
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

export default new Vuex.Store({
    state, actions, mutations, getters
})