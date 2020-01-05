const path = require("path");
const router = require("express").Router();

const connection = require('../db/dbConnection')

// router.get("/k", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// All other routes respond with the index.html file
router.get("/", function(req, res) {
  const query = "SELECT * FROM burgers"
  console.log("htmlRoutes get /")
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('home', {burgers: result});
  })
});

router.post("/", function(req, res) {
  console.log(req.body);
  console.log("htmlRoutes post /");

  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burgerName], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  console.log(req.body);
  console.log("htmlRoutes put /");

  connection.query("UPDATE burgers SET eaten_status = true WHERE id = (?)", [req.body.burgerID], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});


module.exports = router;