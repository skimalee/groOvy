const Post = require('../models/post')


module.exports = {
    create,
    delete: deleteComment
}

function deleteComment(req, res) {
    Post.findById(req.params.id, function(err, post, id) {
        post.comments[id].remove(comment)
            res.redirect('/posts')

    });
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.userId = req.user._id
        post.comments.push(req.body);
    
        post.save(function(err) {
            if (err) return res.redirect(`/posts/${req.params.id}`)
            res.redirect(`/posts`);
        });
    });
}