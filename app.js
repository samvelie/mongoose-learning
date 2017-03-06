var express = require('express');
var app = express();
var taskRouter = require('./routes/tasks');

app.use(express.static('public'));

app.use('/tasks', taskRouter);

app.listen(3003, function() {
  console.log('listening on 3003');
});
