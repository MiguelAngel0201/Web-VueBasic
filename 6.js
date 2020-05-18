const app = new Vue({
  'el':'#app',
  'data': {
    'titulo': 'Vue 06 - Ciclo de vida de Vue (Lifecycle)',
    'parrafo': 'Preciona la tecla "F12" o "Fn + F12" para visualizar la consola y los estados de ciclo de vida de vue.',
    "dato": 'Hola Mundo',
    "textDestroy": "DESTRUIR"
  },
  beforeCreate(){ // Realizada al instanciar el objeto "Vue"
    console.log('VUE 06 - CICLO DE VIDA DE VUE (LIFECYCLE)');
    console.log('1- Before Create.');
  },
  created(){ // Es hecha al crear los métodos, observadores y eventos, pero aún no accede al DOM
    console.log('2- Created.');
  },
  beforeMount(){ // Se ejecuta antes de insertar el DOM 
    console.log('3- Before Mount.');
  },
  mounted(){ // Se ejecuta al insertar el DOM.
    console.log('4- Mounted.');
  },
  beforeUpdate(){ // Al detectar un cambio.
    console.log('5- Before Update.');
  },
  updated(){ // Al realizar los cambios.
    console.log('6- Updated.');
  },
  beforeDestroy(){ // Antes de destruir la instancia.
    console.log('7- Before Destroy.')
  },
  destroyed(){ // Destruida la instancia.
    console.log('8- Destroyed.')
  },
  'methods': {
    destruir(){
      this.textDestroy = 'DESTRUIDO';
      this.$destroy();
    }
  }
});