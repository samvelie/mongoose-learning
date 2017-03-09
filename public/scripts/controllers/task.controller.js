myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
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

  // self.completeTask will stay, because it's the glue between the controller and view
  self.completeTask = function(taskId) {
    TaskFactory.completeTask(taskId);
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
