var express = require('express'); // Used for routing
var router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/login.html');
});

router.get('/account', function (req, res) {
   res.sendFile(__dirname + '/www/account.html');
});

module.exports = router;
