import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        points: 0,
        record: 0,
        name: ""
    },
    mutations: {
        addPoints(state, increment) {
            state.points += increment;
        },
        setRecord(state, score) {
            state.record = score;
        },
        setName(state, name) {
            state.name = name;
        },
        resetPoints(state) {
            state.points = 0;
        }
    }
});

export default store;
