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
  console.log("jj", db)

  router.post('/', (req, res) => {
    console.log("jj", db)
    const query = {
      text: "INSERT INTO users(first_name,last_name,email,date_of_birth,group_id)VALUES('basel','mmm','kkk','sss',2) RETURNING *;"
    };
    db.query(query)
    console.log("nnnn")
      .then(dbRes => console.log(dbRes))
      .catch(err => console.log(err));
  });
  return router;
};
