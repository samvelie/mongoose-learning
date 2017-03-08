var myApp = angular.module('TaskApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/todoList', {
      templateUrl: '/views/todoList.html',
      controller: 'TaskController',
      controllerAs: 'tc'
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: 'AboutController',
      controllerAs: 'ac'
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);


myApp.controller('AboutController', function(){
  console.log('About Controller was loaded');
  var self = this;
  self.listOfPeople = ['Phil', 'Tom', 'Jeremy', 'Celina', 'Kris'];
});
