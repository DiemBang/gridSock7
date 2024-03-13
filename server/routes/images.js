let globalGrid = require("../globalGrid.js");

var express = require("express");
var router = express.Router();
var cors = require("cors");
router.use(cors());

router.get("/", function (req, res, next) {
  console.log("globalgrid in images", globalGrid.grid);
  req.app.locals.db
    .collection("images")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/saveImage", function (req, res) {
  let newImage = {
    user: req.body.user,
    name: req.body.name,
    grid: globalGrid.grid
  };

  req.app.locals.db
    .collection("images")
    .insertOne(newImage)
    .then((result) => {
      console.log(result);
      res.json({
        message: "New image saved " + result.insertedId,
      });
    });
});

module.exports = router;
