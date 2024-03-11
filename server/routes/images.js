var express = require('express');
var router = express.Router();
var cors = require('cors');
router.use(cors());

router.get('/', function(req, res, next) {

    req.app.locals.db.collection("images").find().toArray()
    .then(results => {
        console.log(results);
        res.json(results);
    })
    .catch(error => {
        console.log("error", error);
    });
});

router.post('/add', function(req, res) {

    req.app.locals.db.collection('images').insertOne(req.body)
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(error => {
        console.log("error", error);
    })
})


module.exports = router;