Vue.component('padre', {
  template: /*html*/ `
    <div>
    <h2>Número {{numero}}</h2>
    <hijo></hijo>
    </div>
  `,
  computed: {
    // Solución 1
    // numero() {
    //   // Cuando trabajamos dentro de la instancia no se coloca el signo del dolar "$" para llamar al store
    //   return store.state.numero;
    // }
    ...Vuex.mapState(['numero'])
  }

});
const store = new Vuex.Store({
  state: {
    'numero': 0
  },
  'mutations': {
    increment(state) {
      state.numero++;
    }
  },
});

Vue.component('hijo', {
  template: /*template*/ `
  <div>
    <button @click="$store.commit('increment')">+</button>
    <h2>Número {{numero}}</h2>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero'])
  }
});

new Vue({
  'el': '#app',
  // store: store,
  store,
  data: {
    'title': 'Vue 11 - mapState con Vuex'
  },
});