var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({'index': { title: 'Express' }});
});

module.exports = router;
