const store = new Vuex.Store({
  state: {
    numero: 0
  },
  mutations: {
    increment(state) {
      state.numero++;
    },
    decrement(state, n) {
      state.numero -= n;
    }
  }
});
Vue.component('padre', {
  template: /*template*/ `
  <div class="text-center">
    <h2 class="text-primary">Elemento padre</h2>
    <h3>Valor de contador de click: {{numero}}</h3>
    <hijo></hijo>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero'])
  },
  methods: {
    ...Vuex.mapMutations(['increment', 'decrement'])
  }

});
Vue.component('hijo', {
  template: /*template*/ `
  <div>
    <h2 class="text-secondary">Elemento hijo</h2>
    <h3>Valor de contador de click: {{numero}}</h3>
    <button class="btn btn-success my-3" @click="increment()" v-if="numero < 50">+</button>
    <button class="btn btn-danger my-3" @click="decrement(2)" v-if="numero > 1">-</button>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero']),
  },
  methods: {
    ...Vuex.mapMutations(['increment', 'decrement'])
  }

});
new Vue({
  el: '#app',
  data: {
    title: 'Vue 12 - mapMutation y Parámetros en Mutation con Vuex'
  },
  store,

});