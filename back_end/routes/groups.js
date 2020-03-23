const router = require("express").Router();


module.exports = db => {


  //update group
  router.put('/:group_id/update', (req, res) => {
    const group_id = req.params.group_id;
    const { name } = req.body
    const query = {
      text: "update groups set name=$1 where id=$2 RETURNING *",
      values: [name, group_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });

  // delete group
  router.delete('/:group_id/delete', (req, res) => {
    const group_id = req.params.group_id;

    const query = {
      text: "delete from groups where id=$1",
      values: [group_id]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });
  // get all the groups
  router.get('/', (req, res) => {
    const query = {
      text: "select name, count(*)as number_of_users from groups GROUP BY name ;"
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb.rows);
        res.json(resDb.rows);
      })
      .catch(err => console.log(err));
  });

  // add a new group
  router.post('/', function (req, res) {
    const { name } = req.body
    const query = {
      text: "INSERT INTO groups(name)VALUES($1);",
      values: [name]
    };
    db.query(query)
      .then(resDb => {
        console.log(resDb);
      })
      .catch(err => console.log(err));
  });
  return router;
};
