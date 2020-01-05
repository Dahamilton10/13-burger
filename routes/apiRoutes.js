const router = require("express").Router();

// we require the dbconnection file so that we can access the connection oobject that we established
// this allows us to call "connection.query(...)" anyhere the connection has been required.
const connection = require('../db/dbConnection')

// router in this case is behaving the same as it has throughout the route tree, however we are now at the endpoints that will bit hit with browser requests
// instead of calling "router.USE(...)" we will be calling "router.get(..)", replacing "get" with whichever http verb is relevant (post, delete, etc.)
router.get("/", function(req, res) {
  const query = "SELECT * FROM burgers"
  console.log("apiRoutes get /");
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('home', {burgers: result});
  })
});


router.post("/", function(req, res) {
  const query = "SELECT * FROM users"
  console.log("apiRoutes post /");
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('home', {burgers: result});
  })
});


router.put("/", function(req, res) {
    const query = "SELECT * FROM users"
    console.log("apiRoutes put /");
    connection.query(query, (err, result) => {
      if (err) throw err;
      res.render('home', {burgers: result});
    })
  });

module.exports = router;