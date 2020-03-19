const router = require("express").Router();


module.exports = db => {
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

};
