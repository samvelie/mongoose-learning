var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi-tasks',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

// get all tasks
router.get('/', function(req, res) {
  console.log('hit my get all tasks route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    // SELECT * FROM task;
    client.query('SELECT * FROM task;', function(err, result) {
      done(); // close the connection db

      if(err){
        console.log(err);
        res.sendStatus(500); // the world exploded
      }
      console.log(result.rows);
      res.status(200).send(result.rows);
    });
  });
});

module.exports = router;
