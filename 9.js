Vue.component('padre',{
  data() {
    return{
      'n': 0,
      'nombrePadre': ''
    }
  },
  'template': /*template*/
  `
  <div class="bg-primary py-3 text-light text-center">
    <h3>Es el elemento {{tipo}}</h3>
    <h4>El valor dado en el componente hijo fue el nommbre: {{nombrePadre}}</h4>
    <hijo :n="n" @nombreHijo = "nombrePadre = $event"></hijo>
    <div class="d-flex justify-content-center my-3">
    <button v-if="n > 0" class="btn btn-danger mr-3"@click="n--">-</button>
    <button v-if="n < 20"class="btn btn-success" @click="n++">+</button>
    </div>
    <h6>El valor del contador es: {{n}}</h6>
    </div>
  `,
  'props': [
    'tipo'
  ]
});
Vue.component('hijo', {
  data() {
    return {
      'tipo': 'hijo',
      'nombre': 'Miguel'
    }
  },
  'template': /*template*/
  `
  <div class="bg-secondary p-3 my-3 d-inline-block px-1">
    <h3>Es el elemento {{tipo}}</h3>
    <h6>El valor del contador es: {{n}}</h6>
  </div>
  `,
  'props': [
    'n'
  ],
  mounted(){
    this.$emit('nombreHijo', this.nombre);
  }
});
new Vue({
  'el': '#app',
  data: {
    'title': 'Vue 09 - Comunicación entre componentes (parte 2)'
  }
});