import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        points: localStorage.points ? localStorage.points : 0,
        record: localStorage.record ? localStorage.record : 0,
        name: localStorage.name ? localStorage.name : ""
    },
    mutations: {
        addPoints(state, increment) {
            state.points += increment;
            localStorage.points = state.points;
        },
        setRecord(state, score) {
            state.record = score;
            localStorage.record = state.record;
        },
        setName(state, name) {
            state.name = name;
            localStorage.name = name;
        },
        resetPoints(state) {
            state.points = 0;
            localStorage.points = 0;
        }
    }
});

export default store;
