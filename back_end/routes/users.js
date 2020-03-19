const router = require("express").Router();

module.exports = db => {

  router.get('/', function (req, res, next) {
    res.send('respond with a resource');
  });

};
