const Post = require('../models/post')


module.exports = {
    create,
    delete: deleteComment
}

function deleteComment(req, res) {
    Post.findById(req.params.postsId, function(err, foundPost) {
        foundPost.comments.remove(req.params.commentsId);
        foundPost.save(function(err) {
            res.redirect('/posts')
        })
    })
};


function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.userId = req.user._id;
        post.comments.push(req.body);
    
        post.save(function(err) {
            if (err) return res.redirect(`/posts/${req.params.id}`)
            res.redirect(`/posts`);
        });
    });
}