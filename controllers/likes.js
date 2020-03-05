const Post = require('../models/post')
const User = require('../models/user');
const Like = require('../models/like')

module.exports = {
    show
}

function show(req, res) {
  // Post.findById(req.params.id, function(err, post) {
  //   const likePost = req.body
  //   post.likes.push(likePost)
  //   post.save();
  //   req.user.likes.push(likePost);
  //   req.user.save(function(err) {
  //     res.redirect('/posts');
  //   })
  // })

  User.findById(req.params.id, function(err, user) {
    Post.find({'userId': user._id}, function(err, post) {
        user.post.push()
      })
  });
}
