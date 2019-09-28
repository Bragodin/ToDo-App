const express = require('express');
var fs = require('fs');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('db-tasks.json', 'utf8', function (err, data) {
    if (err) {
      res.send(500);
    }
    res.json(JSON.parse(data));
  });
});

/* PUT (update) users listing. */
router.post('/', (req, res) => {
  fs.readFile('db-tasks.json', 'utf8', function (err, data) {
      if (err) {
          console.log(err);
      } else {
        fs.readFile('db-tasks.json', 'utf8', function readFileCallback(err, data) {
          if (err) {
              res.send(500);
          } else {
              obj = JSON.parse(data);
              console.log(req.body)
              obj.push(req.body);
              json = JSON.stringify(obj);
              fs.writeFile('db-tasks.json', json, 'utf8', function (err, data) {
                  if (err) {
                      res.send(500);
                  }
              });
          }
      });
      }
  });
});

/* DELETE users listing. */
// router.delete('/', function (req, res, next) {
//   res.json({
//     message: 'delete method'
//   })
// });

/* POST users listing. */

module.exports = router;
