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
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
    },
    editTarea(index) {
      this.tareas[index].estado = !this.tareas[index].estado; 
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
    },
    updateTarea(index){
      this.nuevaTarea = this.tarea[index].estado;
    },
    remTarea(index){
      this.tareas.splice(index,1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
    }
  },
  created(){
    let dataDB = JSON.parse(localStorage.getItem('gym-vue'));
    (dataDB === null) ? this.tareas = [] : this.tareas = datosDB;
  }
});