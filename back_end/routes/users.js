const router = require("express").Router();
require("dotenv").config();

module.exports = db => {



  //update user
  router.put('/update/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    const { first_name, last_name, email, birthday } = req.body
    const query = {
      text: "update users set first_name=$1, last_name=$2,email=$3,date_of_birth=$4 where id=$2 RETURNING *",
      values: [first_name, last_name, email, birthday, user_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });
  //delete user
  router.delete('/delete/:user_id', (req, res) => {
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
  //add users
  router.post("/new", (req, res) => {
    console.log("i ", req.body)
    const { first_name, last_name, email, birthday, group_id } = req.body
    const query = {
      text: "INSERT INTO users(first_name,last_name,email,date_of_birth, group_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
      values: [first_name, last_name, email, birthday, group_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows, "insert");
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


  return router;
};
