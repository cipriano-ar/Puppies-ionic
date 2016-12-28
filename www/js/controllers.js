angular.module('starter.controllers', [])

.controller('TodosCtrl', function ($scope, Todos) {
  $scope.Todos = Todos
})

.controller('TodoDetailCtrl', function($scope, $state, Todos, $ionicHistory) {
  $scope.Todos = Todos
  $scope.todo = Todos.get($state.params.id)
  $scope.eliminar = function eliminar(todo) {
    Todos.remove(todo)
    $ionicHistory.goBack()
  }
  // console.log($scope.todo);
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
