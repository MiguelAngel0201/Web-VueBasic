const  app = new Vue({
  'el': ' #app', // Selecciona el elemento en donde se renderizará
  'data': {
    'titulo': 'Vue 03 - Keyup, v-model y Computed',
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
    'nuevaFruta': '',
    'total': 0
  },
  'methods': {
    agregarFruta(){
      console.log('Diste Click');
      this.frutas.push({
        'nombre': this.nuevaFruta, 
        cantidad: 0
      });
      this.nuevaFruta = '';
    },
    otroMetodo(){

    }
  },
  'computed':{
    sumarFrutas(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total += fruta.cantidad;
      }
      return this.total;
    }
  }
})