import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruits: [
      { name: "Manzana", quantity: 0 },
      { name: "Pera", quantity: 0 },
      { name: "Naranja", quantity: 0 }
    ]
  },
  mutations: {
    add(state, index) {
      state.fruits[index].quantity++;
    },
    resetValues(state) {
      state.fruits.forEach(fruit => {
        fruit.quantity = 0;
      });
    }
  },
  actions: {},
  modules: {}
});
