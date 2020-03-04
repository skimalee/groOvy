var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

/* GET users listing. */
router.get('/', postsCtrl.index);
router.post('/', postsCtrl.new);
router.get('/:id/update', postsCtrl.edit)
router.delete('/:id', postsCtrl.delete)
router.get('/grooves', postsCtrl.grooves)

// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;
