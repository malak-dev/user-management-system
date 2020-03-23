const router = require("express").Router();
require("dotenv").config();

module.exports = db => {

  router.delete('/:user_id/delete', (req, res) => {
    const user_id = req.params.user_id;

    const query = {
      text: "delete from users where id=$1",
      values: [user_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });

  // get a specific users
  router.get('/:group_id', (req, res) => {
    const group_id = req.params.group_id;

    const query = {
      text: "select * from users where group_id =$1;",
      values: [group_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });
  // get all the users
  router.get('/', (req, res) => {

    const query = {
      text: "select * from users ;"
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });
  // add a new user
  router.post("/", (req, res) => {
    console.log(req.body, "i ")

    const [first_name, last_name, email, birthday] = req.body
    const query = {
      text: "INSERT INTO users(first_name,last_name,email,date_of_birth) VALUES ($1,$2,$3,$4) RETURNING *;",
      values: [first_name, last_name, email, birthday]
    };
    db.query(query)
    console.log("nnnn")
      .then(dbRes => console.log(dbRes))
      .catch(err => console.log(err));
  });





  return router;
};
