const app = new Vue({
  'el': '#app',
  'data': {
    'titulo': 'Vue 05 - Propiedades Computadas',
    'mensaje': 'Hola soy Miguel',
    'cont': 0,
  },
  'computed': {
    invertido(){
      return this.mensaje.split('').reverse().join('');
    },
    color(){
      return{
        'bg-success': this.cont <= 25,
        'bg-warning': (this.cont > 50) && (this.cont < 75),
        'bg-danger': this.cont >= 75
      }
    }
  }
});