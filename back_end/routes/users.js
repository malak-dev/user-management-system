const router = require("express").Router();

module.exports = db => {
  // router.post('/users', (req, res) => {
  //   console.log("mm")
  //   const query = {
  //     text: "select * from users ;"
  //   };
  //   db.query(query)
  //   console.log("jjjj")
  //     .then(dbRes => console.log(dbRes))
  //     .catch(err => console.log(err));
  // });

  router.post('/', function (req, res) {
    console.log("jj")
    const query = {
      text: "INSERT INTO users(first_name,last_name,email,date_of_birth,group_id)VALUES('basel','mmm','kkk','sss',2) RETURNING *;"
    };
    db.query(query)
      .then(dbRes => console.log(dbRes))
      .catch(err => console.log(err));
  });
  return router;
};
