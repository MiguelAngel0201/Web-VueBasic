const  app = new Vue({
  'el': ' #app', // Selecciona el elemento en donde se renderizará
  'data': {
    'titulo': 'Vue 01 - Introducción',
    'frutas': ['Manzana', 'Pera', 'Plátano'],
    'otrasFrutas': [
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
    ]
  }
})