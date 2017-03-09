myApp.factory('TaskFactory', ['$http', function($http) {

  var factoryTasks = { list: [] };

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryTasks.list = response.data;
      // factoryTasks = {
      //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
      // }
    });
  }

  function completeTask(taskId) {
    // http request moves to factory because it's the glue between the factory and the server
    $http({
      method: 'PUT',
      url: '/tasks/complete/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }


  // this is the public API, if it's not in here, your controller won't see it
  return {
    allTasks: factoryTasks,
    updateTasks: getTasks,
    completeTask: completeTask
  };
}]);
