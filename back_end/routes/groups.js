const router = require("express").Router();


module.exports = db => {

  router.get('/', (req, res) => {
    const query = {
      text: "select * from groups ;"
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });

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
