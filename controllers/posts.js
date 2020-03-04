const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
  index,
  new: newPost,
  delete: deletePost,
  edit,
  grooves
}

function grooves(req, res) {
  res.render('posts/grooves')
}

function edit(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, function(err, editOne) {
    res.redirect('/posts')
  });
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id, function(err, deleteOne) {
    res.redirect('/posts')
  });

}

function newPost(req, res) {
  User.findById(req.params.id)
  req.body.userId = req.user._id
  const newPost = new Post(req.body)
  newPost.save()
  req.user.posts.push(newPost);
  req.user.save(function(err) {
    res.redirect('/posts');
  });
}


function index(req, res, next) {
   let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
   let sortKey = req.query.sort || 'name';
   User.find(modelQuery)
   .sort(sortKey).exec(function(err, users) {
     if (err) return next(err);
    Post.find({}).sort('-createdAt').populate('userId').exec(function(err, grooves) {
      console.log(grooves)
      res.render('posts/index', {
         users,
         user: req.user,
         name: req.query.name,
         sortKey,
         grooves
       })
    })
  });
}