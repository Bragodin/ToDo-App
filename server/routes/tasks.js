const express = require('express');
var fs = require('fs');
const router = express.Router();

router.get('/', function(req, res, next) {
  fs.readFile('db-tasks.json', 'utf8', function (err, data) {
    if (err) {
      res.send(500);
    }
    res.json(JSON.parse(data));
  });
});

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

// router.put('/', (req, res) => {
//   const body = req.body;
//   let obj = null;

//   fs.readFile('db-tasks.json', 'utf8', function (err, data) {
//       if (err) {
//           console.log(err);
//       } else {
//         fs.readFile('db-tasks.json', 'utf8', function readFileCallback(err, data) {
//           if (err) {
//               res.send(500);
//           } else {
//               obj = JSON.parse(data);
//               console.log(req.body)
//               obj = obj.map(
//                 element, i => body[i] = element 
//               );
//               json = JSON.stringify(obj);
//               fs.writeFile('db-tasks.json', json, 'utf8', function (err, data) {
//                   if (err) {
//                       res.send(500);
//                   }
//               });
//           }
//       });
//       }
//   });
// });

// router.delete('/', (req, res) => {
//   fs.readFile('db-tasks.json', 'utf8', function (err, data) {
//       if (err) {
//           console.log(err);
//       } else {
//         fs.readFile('db-tasks.json', 'utf8', function readFileCallback(err, data) {
//           if (err) {
//               res.send(500);
//           } else {
//               res.json(JSON.parse(data));
//               obj = JSON.parse(data);
//               obj.forEach(element, i => {
//                 if(element.name === data.name){
//                   obj.splice(i, 1);
//                 }
//               });
//               fs.writeFile('db-tasks.json', json, 'utf8', function (err, data) {
//                   if (err) {
//                       res.send(500);
//                   }
//               });
//           }
//       });
//       }
//   });
// });

router.delete('/', function (req, res, next) {
  res.json({
    message: 'delete method'
  })
});

module.exports = router;
