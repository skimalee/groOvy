var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

/* GET users listing. */
router.get('/', postsCtrl.index);
router.post('/', postsCtrl.new);
router.post('/:postId/update', postsCtrl.update)
router.delete('/:id', postsCtrl.delete)
router.get('/grooves', postsCtrl.grooves)
router.get('/grooves/:id', postsCtrl.grooves)
router.get('/:postId/go-to-edit-page', postsCtrl.goToEditPage)


module.exports = router;
