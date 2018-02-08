var express = require('express');
var router = express.Router();
var ServerRender = require('../lib/ServerRenderer');
const {
  getList,
  addToList
} = require('../data/list.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  ServerRender('pages/index.js').then((html) => {
    res.send(html); 
  });
});

/* GET list page. */
router.get('/list', function(req, res, next) {
  ServerRender('pages/list.js').then((html) => {
    res.send(html); 
  });
});

/* GET single page. */
router.get('/single/:type', function(req, res, next) {
  ServerRender('pages/single.js', req.url).then((html) => {
    res.send(html); 
  });
});

/* GET list. */
router.get('/getList', function(req, res, next) {
  res.send(getList());
});

/* add item list. */
router.post('/addToList', function(req, res, next) {
  addToList(req.body.items);
  res.end();
});

module.exports = router;
