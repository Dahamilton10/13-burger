const path = require("path");
const router = require("express").Router();

const connection = require('../db/dbConnection')

// router.get("/k", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// All other routes respond with the index.html file
router.get("*", function(req, res) {
  const query = "SELECT * FROM burgers"
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.render('home', {burgers: result});
  })
});

module.exports = router;