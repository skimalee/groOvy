var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

/* GET users listing. */
router.get('/', postsCtrl.index)

// router.post('/facts', isLoggedIn, usersCtrl.addFact);

module.exports = router;
