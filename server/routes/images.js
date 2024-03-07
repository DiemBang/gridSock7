var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    res.send("respond with a resource");
});

router.post('/add', function(req, res) {

    req.app.locals.db.collection('gameImages').insertOne(req.body)
    .then(result => {
        console.log(result);
        res.redirect('/show');
    })
})


module.exports = router;