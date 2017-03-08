myApp.factory('TaskFactory', ['$http', function($http) {

  var testArrayVariable = ['queso', 'bagel', 'donald bagel', 'salsa', 'carolyn'];
  testArrayVariable.pop();

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

  // this is the public API, if it's not in here, your controller won't see it
  return {
    testProperty: 'taco',
    testArray: testArrayVariable,
    allTasks: factoryTasks,
    updateTasks: getTasks
  };
}]);
