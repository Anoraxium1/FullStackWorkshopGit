var express = require('express'); // Used for routing
var router = express.Router();

router.use(express.urlencoded({ extended: true}));

var dummyUsers = [
    {email: 'test@test.com',password: '1234'},
    {email: 'test1@test.com',password: '1234'},
    {email: 'test2@test.com',password: '1234'}
]

router.post('/login/attempt', function (req, res) {
    var matched = false;

    for (var i = 0; i < dummyUsers.length; i++) {
        if (req.body.email === dummyUsers[i].email && req.body.password === dummyUsers[i].password) {
            matched = true;
            break;
        }
    }

    if (matched) {
        res.json({ ok: true });
    } else {
        res.json({ ok: false, errors: {} });
    }
});

module.exports = router;