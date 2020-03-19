const router = require("express").Router();


module.exports = db => {
  //router.get('/', function (req, res) {
  //   const query = {
  //     text: "SELECT * FROM groups;"
  //   };
  //   db.query(query)
  //     .then(resDb => {
  //       console.log(resDb);
  //     })
  //     .catch(err => console.log(err));
  // });
  //   router.post('/', function (req, res) {
  //     const query = {
  //       text: "INSERT INTO groups(first_name,last_name,email,date_of_birth)VALUES('basel','nnn','kkk','sss');"
  //     };
  //     db.query(query)
  //       .then(resDb => {
  //         console.log(resDb);
  //       })
  //       .catch(err => console.log(err));
  //   });
  return router;
};
