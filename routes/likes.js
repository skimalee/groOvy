var express = require('express');
var router = express.Router();
const likesCtrl = require('../controllers/likes')

/* GET users listing. */

router.get('/posts/:id/likes', likesCtrl.show)

module.exports = router;
