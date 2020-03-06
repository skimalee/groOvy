const Post = require('../models/post')


module.exports = {
    create,
    delete: deleteComment
}

function deleteComment(req, res) {
    
    Post.findById(req.params.postsId, function(err, foundPost) {
      
        foundPost.comments.remove(req.params.commentsId);
        foundPost.save(function(err) {
            if (!req.query.stay){
                res.redirect('/posts');
            } else {
                res.redirect(`/posts/grooves/${req.user._id}`)
            }
        })
    })
};


function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log("REQ BODY: ", req.body)
        if(req.body.content == ''){
            return res.redirect(`back`)
        }else {

            req.body.userId = req.user._id;
            post.comments.push(req.body);
            
            post.save(function(err) {
                if (!req.query.stay){
                    res.redirect('/posts');
                } else {
                    res.redirect(`/posts/grooves/${req.user._id}`)
                }
                
            });
        }
    });
}