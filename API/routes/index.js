var express = require('express');
var router = express.Router();
var userModule = require('../models/user/index');
var searchModule = require('../models/search/index');
var async = require('async');
const GoogleImages = require('google-images');
const client = new GoogleImages('CSE_ID', 'YOUR_API_KEY');
var UserModel = require('../models/user/models/userModels');
var js = require('jsearch')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  userModule.listAll()
    .then(function (results) {
      res.send(results);
    })
});

//create search records
router.get('/image', function (req, res, next) {
  if (!req.query.search) {
    res.status(403, { message: "INVALID_URL" }).send({ ERROR: "Please send keyword to search", hint: "URL should be like localhost:3000/image?search=anyKeyToSearch" });
  }
  var createRecord = {
    searchKeyword: req.query.search.split('_').join(' '),
  }
  client.search(createRecord.searchKeyword)
    .then(response => {
      var images = [];
      async.series([
        function (cb) {
          response.forEach(function (obj) {
            var url = obj.url;
            images.push(url);
          })
          return cb(null, images)
        }
        , function (cb) {
          createRecord['searchUrls'] = images;
          cb(null, createRecord);
        },
        function (cb) {
          searchModule.createSearch(createRecord)
            .then(function (results) {
              res.status(200, { message: "OK" }).send(results);
            })
            .catch(next);
        }
      ], function (err, results) {
      });
    })

})

// Details of any search
router.get('/search/:id', function (req, res, next) {
  if (!req.params.id) {
    res.status(403, { message: "INVALID_URL" }).send({ ERROR: "Please send id to update", hint: "URL should be like localhost:3000/search/1121bh2gf22g3233" });
  }
  searchModule.seacrhById(req.params.id)
    .then(function (results) {
      res.status(200, { message: "OK" }).send({ results: results })
    })
    .catch(function (err) {
      res.status(404, { message: "NOT_FOUND" }).send({ ERROR: "Id not found" });
    })
});


//List of all searches
router.get('/list', function (req, res, next) {
  searchModule.listAllSeach(req.params.id)
    .then(function (results) {
      if (results && results.length > 0) {
        res.status(200, { message: "OK" }).send({ results: results })
      } else {
        res.status(404, { message: "NOT_FOUND" }).send({ ERROR: "Data not found" });
      }
    })
    .catch(function (err) {
      res.status(500, { message: "INTERNAL_SERVER_ERROR" }).send({ ERROR: "Internal Server Error, Please contact server admin" });
    })
});

router.all('*', function (req, res, next) {
  res.send({ "Message": "API is not created for this route" });
});

module.exports = router;
