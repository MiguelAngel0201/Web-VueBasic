const app = new Vue({
  'el':'#app',
  'data': {
    'titulo': 'Vue Adicional - CRUD (App de GYM)',
    'tareas': [],
    'nuevaTarea': ''
  },
  'methods': {
    addTarea(){
      this.tareas.push({
        'nombre': this.nuevaTarea,
        'estado': false
      });
      this.nuevaTarea = '';
    },
    editTarea(index) {
      this.tarea[index].estado;
    }
  }
});