Vue.component('tema', {
  data () {
    return {
      'title': 'Vue 07  - Componentes básicos',
      'subtitle': 'Esto es un componente realizado por Vue.js'
    }
  },
  'template': /*template*/
  `
  <div class="row d-flex flex-column">
    <h1>{{title}}</h1>
    <h3>{{subtitle}}</h3>
  </div>
  `,
});
// Definir un nuevo componente llamado button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button class="my-3 btn btn-success" v-on:click="count++">Me ha pulsado {{ count }} veces.</button>'
})
new Vue({
  'el': '#app'
});