Vue.component('padre', {
  template: /*template*/ `
    <div>
    <h2>Número {{$store.state.numero}}</h2>
    <hijo></hijo>
    </div>

  `
});
const store = new Vuex.Store({
  state: {
    'numero': 0
  },
  'mutations': {
    increment(state) {
      state.numero++;
    }
  }
});
Vue.component('hijo', {
  template: /*template*/ `
  <div>
    <button @click="$store.commit('increment')">+</button>
    <h2>Número {{$store.state.numero}}</h2>
  </div>
  `
});

new Vue({
  'el': '#app',
  // store: store,
  store,
  data: {
    'title': 'Vue 10 - Introducción a VueX'
  }
});