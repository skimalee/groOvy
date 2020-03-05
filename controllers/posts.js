const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
  index,
  new: newPost,
  delete: deletePost,
  grooves,
  goToEditPage,
  update
}

function update(req, res) {
  Post.findByIdAndUpdate(req.params.postId, req.body, function (err, edit) {
    res.redirect('/posts');
  })
}

function goToEditPage(req, res) {
  Post.findById(req.params.postId, function (err, post) {
    res.render('posts/edit', { post })
  })
}

function grooves(req, res) {
  User.findById(req.params.id, function (err, user) {
    User. find({}, function(e, allUsers) {

      Post.find({ 'userId': user._id }).sort('-createdAt')
        .exec(function (err, grooves) {
          res.render('posts/grooves', {
            user,
            grooves,
            allUsers
          })
        })
    });
  })
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function (err, deleteOne) {
    res.redirect('/posts')
  });
}

function newPost(req, res) {
  User.findById(req.params.id)
  req.body.userId = req.user._id
  const newPost = new Post(req.body)
  newPost.save()
  req.user.posts.push(newPost);
  req.user.save(function (err) {
    res.redirect('/posts');
  });
}


function index(req, res, next) {
  User.findById(req.params.id, function (err, users) {
    User.find({}, function (e, allUsers) {

      Post.find({}).sort('-createdAt')
        .populate('userId')
        .exec(function (err, grooves) {
          res.render('posts/index', {
            users,
            grooves,
            allUsers
          })
        })
    })
  });
}