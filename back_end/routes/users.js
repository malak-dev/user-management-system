const router = require("express").Router();

module.exports = db => {
  console.log("mm")
  router.get('/', (req, res) => {
    console.log("mm")
    const query = {
      text: "select * from users ;"
    };
    db.query(query)
      .then(dbRes => console.log(dbRes.rows))
      .catch(err => console.log(err));
  });

  // router.post('/', (req, res) => {
  //   console.log("jj", db)
  //   const query = {
  //     text: "INSERT INTO users(first_name,last_name,email,date_of_birth,group_id)VALUES('basel','mmm','kkk','sss',2) RETURNING *;"
  //   };
  //   db.query(query)
  //   console.log("nnnn")
  //     .then(dbRes => console.log(dbRes))
  //     .catch(err => console.log(err));
  // });
  return router;
};
