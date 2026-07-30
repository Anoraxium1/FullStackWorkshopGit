var express = require('express'); // Used for routing
var router = express.Router();

router.use(express.urlencoded({ extended: true }));

var dummyUser = {
    email: 'test@test.com',
    password: '1234'
};

router.post('/login', function (req, res) {
    if (req.body.email === dummyUser.email && req.body.password === dummyUser.password) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid Credentials');
    }
});

module.exports = router;
