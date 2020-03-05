var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')

/* GET users listing. */

router.post('/posts/:id/comments', commentsCtrl.create),
router.delete('/posts/:id/comments', commentsCtrl.delete)

module.exports = router;
