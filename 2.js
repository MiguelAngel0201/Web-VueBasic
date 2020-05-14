const  app = new Vue({
  'el': ' #app', // Selecciona el elemento en donde se renderizará
  'data': {
    'titulo': 'Vue 02 - Methods, v-model y Evento Click',
    'frutas': [
      {
        'nombre': 'Naranja',
        'cantidad': 5
      },
      {
        'nombre': 'Piña',
        'cantidad': 6
      },
      {
        'nombre': 'Ciruela',
        'cantidad': 0
      }
    ],
    'nuevaFruta': ''
  },
  'methods': {
    agregarFruta(){
      console.log('Diste Click')
      this.frutas.push({
        'nombre': this.nuevaFruta, 
        cantidad: 0
      })
    }
  }
})