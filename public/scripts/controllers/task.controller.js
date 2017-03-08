myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.someThingToGoOnTheView = TaskFactory.testProperty;
  self.someRandomArray = TaskFactory.testArray;
  self.taskList = TaskFactory.allTasks;

  // TaskFactory.allTasks = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  // self.taskList = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      TaskFactory.updateTasks();
      self.newTask = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/complete/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

  self.uncompleteTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/uncomplete/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }


}]);
