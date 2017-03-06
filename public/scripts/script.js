console.log('sourced');

$(document).ready(function() {
  console.log('doc ready');
  getTasks();
  $('#createTask').on('click', createTasks);
});

// ajax function
function getTasks() {
  $.ajax({
    type: 'GET',
    url: '/tasks',
    success: function(response) {
      console.log('get tasks response ->', response);
      appendTasks(response);
    }
  });
}

function createTasks() {
  var taskFromDom = $('#task').val();
  var objectToSend = {
    taskName: taskFromDom
  };

  console.log('object to send', objectToSend);

  $.ajax({
    type: 'POST',
    url: '/tasks',
    data: objectToSend,
    success: function(response) {
      console.log('success', response);
      getTasks();
    }
  });
}

// dom append functions
function appendTasks(tasks) {
  console.log('inside tasks ->', tasks);
  $('#taskDiv').empty();

  tasks.forEach(function(task) {
    $('#taskDiv').append('<div class="task">'+ task.name + "</div>");
  });
}
