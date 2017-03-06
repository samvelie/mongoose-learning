var router = require('express').Router();

// get all tasks
router.get('/', function(req, res) {
  console.log('hit my get all tasks route');
  res.sendStatus(200);
});

module.exports = router;
