var myApp = angular.module('TaskApp', ['ngRoute']);

console.log(myApp);

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

myApp.controller('HomeController', function(){
  console.log('Home Controller was loaded');
  var self = this;
  self.someMessage = 'This site is amazing!!';
});

myApp.controller('AboutController', function(){
  console.log('About Controller was loaded');
  var self = this;
  self.listOfPeople = ['Phil', 'Tom', 'Jeremy', 'Celina', 'Kris'];
});

myApp.controller('TaskController', ['$http', function($http){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = [];

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log(response.data);
      self.taskList = response.data;
    });
  }

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      getTasks();
      self.newTask = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/complete/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }

  self.uncompleteTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/uncomplete/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }


}]);
