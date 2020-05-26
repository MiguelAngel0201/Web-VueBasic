// VUEX
const store = new Vuex.Store({
  state: {
    numero: 0,
    cursos: []
  },
  mutations: {
    increment(state) {
      state.numero++;
    },
    decrement(state, n = 1) {
      state.numero -= n;
    },
    fillCursos(state) {
      state.cursos
    }
  },
  actions: {
    getCursos: async function() {
      const data = await fetch('13.json');
      const cursos = await data.json(); //transforma todo lo que viene a formato json
    }
  }
});
// ====

// Vue Components
Vue.component('padre', {
  template: /*template*/ `
  <div class="p-5 bg-dark text-white">
    <h3 class="text-primary">Elemento padre</h3>
    <h6>El número es igual a: {{numero}}</h6>
    <hijo></hijo>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero'])
  },
});
Vue.component('hijo', {
  template: /*template*/ `
  <div class="bg-white p-5 align-items-center d-flex flex-column">
    <h3 class="text-secondary">Elemento hijo</h3>
    <div>
      <button @click="increment()" class="btn btn-success my-3" v-if="numero < 50">+</button>
      <button @click="decrement()" v-if="numero > 1" class="btn btn-danger my-3">-</button>
    </div>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero'])
  },
  methods: {
    ...Vuex.mapMutations(['increment', 'decrement'])
  }
});
// ==============

// Vue
new Vue({
  el: '#app',
  data: {
    title: 'Vue 13 - Action y mapAction con Vuex'
  },
  store,
});
// ===