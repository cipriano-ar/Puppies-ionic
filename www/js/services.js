angular.module('starter.services', [])

.service('Todos', function Todos() {

  this.data = [{
    id: 0,
    desc: 'Comprar leche',
    completado: false,
  }, {
    id: 1,
    desc: 'Trapear cocina',
    completado: false,
  }, {
    id: 2,
    desc: 'Reparar bici',
    completado: false,
  }];

  // ALL
  this.all = function all() {
    return this.data
  }
  // REMOVE
  this.remove = function remove(todo) {
    this.data.splice(this.data.indexOf(todo), 1);
  }
  // GET
  this.get = function get(id) {
    var todo = []
    this.data.map(function(el) {
      if (el.id == id) {
        todo = el
      }
    })
    return todo
  }

})
