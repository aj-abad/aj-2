import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        hoveredProject: -1
    },
    getters: {
        getHoveredProject: state => state.hoveredProject
    },
    mutations: {
        setHoveredProject: (state, payload) => state.hoveredProject = payload
    }
})